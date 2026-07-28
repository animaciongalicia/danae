interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  /** Lets a long title stay on one line on desktop. */
  wide?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  wide = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";
  const widthClasses = wide ? "max-w-none" : "max-w-3xl";

  return (
    <div className={`${widthClasses} ${alignClasses}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-strong">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-serif text-3xl leading-tight text-balance sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
