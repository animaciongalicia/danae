import { NextResponse } from "next/server";
import {
  getContactEmail,
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
  commercialFormSchema,
  getFieldErrors,
  type CommercialFormData,
} from "@/lib/validation";

const notConfiguredMessage =
  "El envío de formularios aún no está disponible. Disculpa las molestias e inténtalo más adelante.";

const sendFailedMessage =
  "No se ha podido enviar la solicitud. Inténtalo de nuevo en unos minutos.";

function buildEmailText(data: CommercialFormData): string {
  const lines = [
    "Nueva solicitud comercial recibida desde la web.",
    "",
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    data.role ? `Cargo: ${data.role}` : null,
    `Teléfono: ${data.phone}`,
    `Correo electrónico: ${data.email}`,
    "",
    `Tipo de necesidad: ${data.needType}`,
    data.plannedDate ? `Fecha prevista: ${data.plannedDate}` : null,
    `Localización: ${data.location}`,
    data.teamSize ? `Número aproximado de personas: ${data.teamSize}` : null,
    "",
    "Descripción de la necesidad:",
    data.description,
    "",
    "Resultado que se quiere conseguir:",
    data.expectedResult,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

export async function POST(request: Request) {
  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ error: rateLimitMessage }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "La solicitud no es válida." },
      { status: 400 },
    );
  }

  // Honeypot: bots that fill the hidden field get a fake success.
  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    typeof body.website === "string" &&
    body.website.length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = commercialFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Revisa los campos marcados del formulario.",
        fields: getFieldErrors(parsed.error),
      },
      { status: 400 },
    );
  }

  const to = getContactEmail();
  if (!isEmailConfigured() || !to) {
    return NextResponse.json({ error: notConfiguredMessage }, { status: 503 });
  }

  const result = await sendEmail({
    to,
    subject: "Nueva solicitud comercial desde la web de Danahe",
    text: buildEmailText(parsed.data),
    replyTo: parsed.data.email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: sendFailedMessage }, { status: 502 });
  }

  await sendConfirmationEmail({
    to: parsed.data.email,
    subject: "Hemos recibido tu solicitud",
    message:
      "Hemos recibido tu solicitud. Revisaremos la información y contactaremos contigo.",
    replyTo: to,
  });

  return NextResponse.json({ ok: true });
}
