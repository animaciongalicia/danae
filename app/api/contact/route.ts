import { NextResponse } from "next/server";
import { services } from "@/config/services";
import {
  getCandidateEmail,
  getContactEmail,
  isEmailConfigured,
  sendEmail,
} from "@/lib/email";
import { formSubmissionSchema, type FormSubmission } from "@/lib/validation";

const notConfiguredMessage =
  "El envío de formularios aún no está disponible. Disculpa las molestias e inténtalo más adelante.";

function buildEmailContent(submission: FormSubmission): {
  subject: string;
  text: string;
} {
  if (submission.formType === "empresa") {
    const service = services.find((item) => item.id === submission.serviceId);
    const lines = [
      "Nueva solicitud de contacto de empresa",
      "",
      `Nombre: ${submission.name}`,
      `Empresa: ${submission.company}`,
      `Email: ${submission.email}`,
      submission.phone ? `Teléfono: ${submission.phone}` : null,
      service ? `Solución de interés: ${service.title}` : null,
      "",
      "Mensaje:",
      submission.message,
    ];
    return {
      subject: `Contacto web — ${submission.company}`,
      text: lines.filter((line) => line !== null).join("\n"),
    };
  }

  const lines = [
    "Nueva candidatura recibida desde la web",
    "",
    `Nombre: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.phone ? `Teléfono: ${submission.phone}` : null,
    submission.location ? `Localidad: ${submission.location}` : null,
    "",
    "Experiencia y disponibilidad:",
    submission.message,
  ];
  return {
    subject: `Candidatura web — ${submission.name}`,
    text: lines.filter((line) => line !== null).join("\n"),
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "La solicitud no es válida." },
      { status: 400 },
    );
  }

  const parsed = formSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Revisa los campos del formulario.",
        issues: parsed.error.issues.map((issue) => issue.message),
      },
      { status: 400 },
    );
  }

  const submission = parsed.data;
  const to =
    submission.formType === "empresa" ? getContactEmail() : getCandidateEmail();

  if (!isEmailConfigured() || !to) {
    return NextResponse.json({ error: notConfiguredMessage }, { status: 503 });
  }

  const { subject, text } = buildEmailContent(submission);
  const result = await sendEmail({
    to,
    subject,
    replyTo: submission.email,
    text,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        error:
          "No se ha podido enviar el mensaje. Inténtalo de nuevo en unos minutos.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
