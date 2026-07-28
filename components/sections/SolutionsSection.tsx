import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

interface SolutionsSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: { id: string; title: string }[];
  cta: { label: string; href: string };
  tone?: "default" | "surface";
}

export default function SolutionsSection({
  eyebrow,
  title,
  description,
  items,
  cta,
  tone = "default",
}: SolutionsSectionProps) {
  const toneClasses =
    tone === "surface" ? "border-y border-border bg-surface" : "";

  return (
    <section className={`py-14 sm:py-16 ${toneClasses}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-card border border-border bg-white/50 px-5 py-4"
            >
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-sm font-medium">{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href={cta.href} variant="secondary">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
