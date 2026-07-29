/**
 * Brand lockup: the serif name plus "Talent" as a small caps companion.
 * Used in the header and the footer so both stay identical.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-baseline gap-2 ${className}`}>
      <span className="font-serif text-2xl tracking-wide">Danahe</span>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent-strong">
        Talent
      </span>
    </span>
  );
}
