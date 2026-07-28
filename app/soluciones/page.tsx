import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CallToAction from "@/components/sections/CallToAction";
import { solutions, solutionsPageContent } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Diseño de equipos, selección de profesionales, coordinación, formación y supervisión de la ejecución: las soluciones de talento y operaciones de DANAE.",
};

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow={solutionsPageContent.eyebrow}
            title={solutionsPageContent.title}
            description={solutionsPageContent.description}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">Áreas de trabajo</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <ServiceCard
                key={solution.id}
                title={solution.title}
                description={solution.description}
                points={solution.points}
              />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}
