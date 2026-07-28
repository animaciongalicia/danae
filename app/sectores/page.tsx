import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CallToAction from "@/components/sections/CallToAction";
import { sectors, sectorsPageContent } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectores donde trabajamos",
  description:
    "Festivales, congresos, empresas, hostelería, comercio, deporte, agencias y administraciones públicas: cómo adapta DANAE sus equipos y operaciones a cada sector.",
};

export default function SectorsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow={sectorsPageContent.eyebrow}
            title={sectorsPageContent.title}
            description={sectorsPageContent.description}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">Sectores en los que trabajamos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {sectors.map((sector) => (
              <ServiceCard
                key={sector.id}
                title={sector.title}
                description={sector.description}
                points={sector.highlights}
              />
            ))}
          </div>
          <p className="mt-12 text-center text-muted">
            ¿No ves tu sector? El método se adapta:{" "}
            <Link
              href="/contacto"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              cuéntanos tu caso
            </Link>{" "}
            o revisa nuestras{" "}
            <Link
              href="/soluciones"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              soluciones de talento y operaciones
            </Link>
            .
          </p>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}
