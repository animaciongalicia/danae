export type FormStatusState =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function FormStatus({ status }: { status: FormStatusState }) {
  return (
    <p aria-live="polite" className="min-h-6 text-sm">
      {status.type === "success" ? (
        <span className="text-accent-strong">{status.message}</span>
      ) : null}
      {status.type === "error" ? (
        <span className="text-red-700">{status.message}</span>
      ) : null}
    </p>
  );
}
