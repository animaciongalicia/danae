import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CallToAction from "@/components/sections/CallToAction";
import { sectors, sectorsPageContent } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Festivales y conciertos, congresos y ferias, empresas, hostelería y hoteles, comercio, deporte, agencias y administraciones públicas: los sectores donde trabaja DANAE.",
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <ServiceCard
                key={sector.id}
                title={sector.title}
                description={sector.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}
