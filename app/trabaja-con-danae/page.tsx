import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CandidateForm from "@/components/forms/CandidateForm";

export const metadata: Metadata = {
  title: "Trabaja con Danae",
  description:
    "Únete al equipo de profesionales de DANAE para eventos, hostelería, ferias, promociones y entornos corporativos en Galicia.",
};

// Provisional copy for design evaluation; refine wording in later phases.
const profilesContent = {
  title: "Qué perfiles busca Danae",
  profiles: [
    "Camareros y personal de barra.",
    "Azafatas y azafatos de congresos y ferias.",
    "Promotores y personal comercial.",
    "Personal de accesos y atención al público.",
    "Perfiles administrativos y de recepción.",
    "Jefes de equipo y coordinadores.",
  ],
};

const valuesContent = {
  title: "Qué valoramos",
  values: [
    {
      title: "Actitud de servicio",
      description:
        "Ganas de atender bien, resolver y dejar una buena impresión en cada servicio.",
    },
    {
      title: "Fiabilidad",
      description:
        "Puntualidad, compromiso con los turnos aceptados y comunicación clara.",
    },
    {
      title: "Presencia y trato",
      description:
        "Saber representar a la marca del cliente con naturalidad y profesionalidad.",
    },
    {
      title: "Experiencia en el sector",
      description:
        "Se valora, aunque no siempre es imprescindible: formamos cuando el servicio lo requiere.",
    },
  ],
};

const responsibilityContent = {
  title: "Tipos de responsabilidad",
  description:
    "En DANAE se puede crecer: los equipos tienen estructura y cada nivel asume más responsabilidad.",
  levels: [
    {
      title: "Personal de servicio",
      description:
        "Formas parte del equipo con un rol claro, horarios definidos y un responsable de referencia.",
    },
    {
      title: "Jefe de equipo",
      description:
        "Coordinas a un grupo durante el servicio: organización, resolución de incidencias y comunicación.",
    },
    {
      title: "Coordinación",
      description:
        "Diseñas y supervisas la operación completa y eres el interlocutor con el cliente.",
    },
  ],
};

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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl">{profilesContent.title}</h2>
              <ul className="mt-6 space-y-3">
                {profilesContent.profiles.map((profile) => (
                  <li key={profile} className="flex gap-3 text-muted">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl">{valuesContent.title}</h2>
              <dl className="mt-6 space-y-5">
                {valuesContent.values.map((value) => (
                  <div key={value.title}>
                    <dt className="font-medium">{value.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">
                      {value.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            title={responsibilityContent.title}
            description={responsibilityContent.description}
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {responsibilityContent.levels.map((level, index) => (
              <li
                key={level.title}
                className="rounded-card border border-border bg-white/60 p-8"
              >
                <span aria-hidden="true" className="font-serif text-3xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl">{level.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {level.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Envía tu candidatura"
              description="Cuéntanos tu experiencia, los roles que te interesan y tu disponibilidad. Leemos todas las candidaturas."
            />
            <div className="mt-10">
              <CandidateForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
