import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

interface SolutionsSectionProps {
  /** Anchor of the matching group on the solutions page. */
  anchor: string;
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
  anchor,
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
            <li key={item.id}>
              <Link
                href={`/soluciones#${anchor}`}
                className="flex h-full items-center gap-3 rounded-card border border-border bg-white/50 px-5 py-4 transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
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
