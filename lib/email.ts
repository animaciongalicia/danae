interface SendEmailInput {
  to: string;
  subject: string;
  replyTo: string;
  text: string;
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

export function getContactEmail(): string {
  return process.env.EMAIL_CONTACT ?? "";
}

export function getCandidateEmail(): string {
  return process.env.EMAIL_CANDIDATES ?? "";
}

// Sends through the Resend REST API directly; the endpoint is small enough
// that the official SDK would not add anything over a single fetch call.
export async function sendEmail({
  to,
  subject,
  replyTo,
  text,
}: SendEmailInput): Promise<{ ok: boolean }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      reply_to: replyTo,
      text,
    }),
  });

  if (!response.ok) {
    console.error(
      `Resend request failed with status ${response.status}`,
      await response.text(),
    );
    return { ok: false };
  }

  return { ok: true };
}
