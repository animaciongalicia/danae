import { NextResponse } from "next/server";
import {
  getCandidateEmail,
  isEmailConfigured,
  sendConfirmationEmail,
  sendEmail,
} from "@/lib/email";
import {
  getClientKey,
  isRateLimited,
  rateLimitMessage,
} from "@/lib/rateLimit";
import {
  candidateFieldsSchema,
  cvFileRules,
  getFieldErrors,
  type CandidateFieldsData,
} from "@/lib/validation";

const notConfiguredMessage =
  "El envío de candidaturas aún no está disponible. Disculpa las molestias e inténtalo más adelante.";

const sendFailedMessage =
  "No se ha podido enviar la candidatura. Inténtalo de nuevo en unos minutos.";

function buildEmailText(data: CandidateFieldsData): string {
  const lines = [
    "Nueva candidatura recibida desde la web.",
    "",
    `Nombre: ${data.firstName}`,
    `Apellidos: ${data.lastName}`,
    `Teléfono: ${data.phone}`,
    `Correo electrónico: ${data.email}`,
    `Localidad: ${data.city}`,
    `Provincia: ${data.province}`,
    "",
    `Perfil profesional: ${data.profile}`,
    `Nivel de responsabilidad: ${data.responsibilityLevel}`,
    `Disponibilidad: ${data.availability}`,
    `Idiomas: ${data.languages}`,
    `Carnet de conducir: ${data.drivingLicense}`,
    `Vehículo propio: ${data.ownVehicle}`,
    `Disponibilidad para desplazarse: ${data.willingToTravel}`,
    "",
    "Experiencia:",
    data.experience,
    data.comments ? "" : null,
    data.comments ? "Comentarios:" : null,
    data.comments ? data.comments : null,
    "",
    `Autoriza conservar la candidatura para futuros procesos: ${
      data.futureProcesses ? "Sí" : "No"
    }`,
    "",
    "El currículum se adjunta en PDF.",
  ];
  return lines.filter((line) => line !== null).join("\n");
}

function buildSafeFilename(firstName: string, lastName: string): string {
  const slug = `${firstName} ${lastName}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `cv-${slug || "candidatura"}.pdf`;
}

async function validateCvFile(
  value: FormDataEntryValue | null,
): Promise<{ error: string } | { buffer: Buffer }> {
  if (!value || typeof value === "string" || value.size === 0) {
    return { error: cvFileRules.errors.missing };
  }
  if (value.size > cvFileRules.maxBytes) {
    return { error: cvFileRules.errors.tooLarge };
  }
  const hasPdfExtension = value.name.toLowerCase().endsWith(".pdf");
  if (!hasPdfExtension || value.type !== cvFileRules.mimeType) {
    return { error: cvFileRules.errors.notPdf };
  }
  const buffer = Buffer.from(await value.arrayBuffer());
  if (!buffer.subarray(0, 5).toString("latin1").startsWith("%PDF-")) {
    return { error: cvFileRules.errors.notPdf };
  }
  return { buffer };
}

export async function POST(request: Request) {
  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ error: rateLimitMessage }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "La solicitud no es válida." },
      { status: 400 },
    );
  }

  // Honeypot: bots that fill the hidden field get a fake success.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = candidateFieldsSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    city: formData.get("city"),
    province: formData.get("province"),
    profile: formData.get("profile"),
    experience: formData.get("experience"),
    availability: formData.get("availability"),
    languages: formData.get("languages"),
    drivingLicense: formData.get("drivingLicense"),
    ownVehicle: formData.get("ownVehicle"),
    willingToTravel: formData.get("willingToTravel"),
    responsibilityLevel: formData.get("responsibilityLevel"),
    comments: formData.get("comments") ?? "",
    privacy: formData.get("privacy") === "on",
    futureProcesses: formData.get("futureProcesses") === "on",
  });

  const cvValidation = await validateCvFile(formData.get("cv"));

  if (!parsed.success || "error" in cvValidation) {
    const fields = parsed.success ? {} : getFieldErrors(parsed.error);
    if ("error" in cvValidation) {
      fields.cv = cvValidation.error;
    }
    return NextResponse.json(
      { error: "Revisa los campos marcados del formulario.", fields },
      { status: 400 },
    );
  }

  const to = getCandidateEmail();
  if (!isEmailConfigured() || !to) {
    return NextResponse.json({ error: notConfiguredMessage }, { status: 503 });
  }

  const data = parsed.data;
  const result = await sendEmail({
    to,
    subject: "Nueva candidatura recibida desde la web de Danahe",
    text: buildEmailText(data),
    replyTo: data.email,
    attachments: [
      {
        filename: buildSafeFilename(data.firstName, data.lastName),
        content: cvValidation.buffer.toString("base64"),
      },
    ],
  });

  if (!result.ok) {
    return NextResponse.json({ error: sendFailedMessage }, { status: 502 });
  }

  await sendConfirmationEmail({
    to: data.email,
    subject: "Hemos recibido tu candidatura",
    message:
      "Hemos recibido tu candidatura. Revisaremos tu perfil para valorar su encaje en procesos actuales o futuros.",
    replyTo: to,
  });

  return NextResponse.json({ ok: true });
}
