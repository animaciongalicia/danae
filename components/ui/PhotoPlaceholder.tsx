const aspectClasses = {
  "4/5": "aspect-4/5",
  "4/3": "aspect-4/3",
  "3/2": "aspect-3/2",
} as const;

interface PhotoPlaceholderProps {
  aspect: keyof typeof aspectClasses;
  label: string;
  className?: string;
}

// Reserved area for a real photograph; replaced by next/image when assets arrive.
export default function PhotoPlaceholder({
  aspect,
  label,
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <figure className={className}>
      <div
        className={`flex ${aspectClasses[aspect]} w-full items-center justify-center rounded-card border border-border bg-surface shadow-sm`}
      >
        <span aria-hidden="true" className="font-serif text-4xl text-accent">
          D
        </span>
      </div>
      <figcaption className="mt-2 text-xs uppercase tracking-widest text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
