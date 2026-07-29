export interface EmailAttachment {
  filename: string;
  /** Base64-encoded file content. */
  content: string;
}

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
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
// Logs never include message bodies or personal data, only the HTTP status.
export async function sendEmail({
  to,
  subject,
  text,
  replyTo,
  attachments,
}: SendEmailInput): Promise<{ ok: boolean }> {
  try {
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
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
        ...(attachments && attachments.length > 0 ? { attachments } : {}),
      }),
    });

    if (!response.ok) {
      console.error(`Resend request failed with status ${response.status}`);
      return { ok: false };
    }

    return { ok: true };
  } catch {
    console.error("Resend request failed before receiving a response");
    return { ok: false };
  }
}

interface ConfirmationEmailInput {
  to: string;
  subject: string;
  message: string;
  replyTo?: string;
}

// Confirmation to the person who submitted the form. A failure here never
// breaks the request: the internal email already went through.
export async function sendConfirmationEmail({
  to,
  subject,
  message,
  replyTo,
}: ConfirmationEmailInput): Promise<void> {
  await sendEmail({
    to,
    subject,
    text: `${message}\n\n— Danahe Talent`,
    replyTo,
  });
}
