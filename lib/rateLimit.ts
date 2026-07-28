// Basic in-memory rate limiting, good enough for form abuse protection
// without a database. On Vercel each serverless instance keeps its own map,
// so the limit is per instance (documented in the README); for a contact
// form that best-effort protection is sufficient.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const MAX_TRACKED_CLIENTS = 5000;

const submissionsByClient = new Map<string, number[]>();

export function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export function isRateLimited(clientKey: string): boolean {
  const now = Date.now();
  const recent = (submissionsByClient.get(clientKey) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    submissionsByClient.set(clientKey, recent);
    return true;
  }

  recent.push(now);
  submissionsByClient.set(clientKey, recent);

  if (submissionsByClient.size > MAX_TRACKED_CLIENTS) {
    for (const [key, timestamps] of submissionsByClient) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        submissionsByClient.delete(key);
      }
    }
  }

  return false;
}

export const rateLimitMessage =
  "Has enviado demasiadas solicitudes en poco tiempo. Espera unos minutos e inténtalo de nuevo.";
