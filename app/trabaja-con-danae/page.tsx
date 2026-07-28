import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CandidateForm from "@/components/forms/CandidateForm";

export const metadata: Metadata = {
  title: "Trabaja con Danae",
  description:
    "Únete al equipo de profesionales de DANAE para eventos, hostelería, ferias, activaciones de marca y entornos corporativos en Galicia.",
};

const candidateReasons = [
  {
    title: "Servicios organizados",
    description:
      "Trabajarás en operaciones con roles definidos, horarios claros y un responsable al que acudir durante el servicio.",
  },
  {
    title: "Trato profesional",
    description:
      "Sabrás qué se espera de ti antes de cada servicio y recibirás la preparación necesaria cuando el proyecto lo requiera.",
  },
  {
    title: "Proyectos variados",
    description:
      "Eventos, festivales, congresos, hostelería, activaciones de marca y entornos corporativos, según tu perfil y disponibilidad.",
  },
];

export default function WorkWithDanaePage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Trabaja con Danae"
            title="Profesionales que hacen que el servicio funcione"
            description="Buscamos personas con actitud de servicio y ganas de hacer bien su trabajo, para equipos de eventos, hostelería y entornos corporativos. Cuéntanos tu experiencia y tu disponibilidad."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <h2 className="font-serif text-2xl">Cómo trabajamos contigo</h2>
              {candidateReasons.map((reason) => (
                <div key={reason.title}>
                  <h3 className="font-serif text-lg">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2">
              <h2 className="sr-only">Formulario de candidatura</h2>
              <CandidateForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
