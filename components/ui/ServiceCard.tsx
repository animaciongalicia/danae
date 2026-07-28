interface ServiceCardProps {
  title: string;
  description: string;
  points?: string[];
}

export default function ServiceCard({
  title,
  description,
  points,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-white/60 p-8 shadow-sm">
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      {points && points.length > 0 ? (
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-1 text-accent">
                —
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
