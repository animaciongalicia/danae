import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { sectors, sectorsPageContent } from "@/content/sectors";

export default function SectorsSection() {
  return (
    <section className="border-y border-border bg-surface py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={sectorsPageContent.eyebrow}
          title={sectorsPageContent.title}
          description={sectorsPageContent.description}
        />
        <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <li key={sector.id}>
              <Link
                href={`/sectores#${sector.id}`}
                className="flex h-full items-center gap-3 rounded-card border border-border bg-white/50 px-5 py-4 transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-medium">{sector.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          <Link
            href="/sectores"
            className="font-medium text-accent-strong underline-offset-4 hover:underline"
          >
            Ver todos los sectores en detalle
          </Link>
        </p>
      </Container>
    </section>
  );
}
