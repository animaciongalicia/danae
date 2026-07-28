import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CandidateForm from "@/components/forms/CandidateForm";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import JsonLd from "@/components/seo/JsonLd";
import { webPageJsonLd } from "@/lib/structuredData";
import {
  candidateExpectationsContent,
  candidateFormContent,
  candidateProfilesContent,
  candidateResponsibilityContent,
  candidatesPageContent,
  candidateValuesContent,
} from "@/content/candidates";

const pageDescription =
  "Envía tu candidatura a DANAE: personal de barra y sala, azafatas y azafatos, promotores, administrativos, recepcionistas y mandos intermedios para servicios bien organizados.";

export const metadata: Metadata = {
  title: "Trabaja con Danae",
  description: pageDescription,
  alternates: { canonical: "/trabaja-con-danae" },
};

export default function WorkWithDanaePage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow={candidatesPageContent.eyebrow}
            title={candidatesPageContent.title}
            description={candidatesPageContent.description}
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl">
                {candidateProfilesContent.title}
              </h2>
              <p className="mt-3 text-muted">
                {candidateProfilesContent.description}
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {candidateProfilesContent.profiles.map((profile) => (
                  <li key={profile} className="flex gap-3 text-muted">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{profile}</span>
                  </li>
                ))}
              </ul>
              <PhotoPlaceholder
                aspect="3/2"
                label="Equipo DANAE en un servicio real"
                className="mt-8"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl">
                {candidateValuesContent.title}
              </h2>
              <dl className="mt-6 space-y-5">
                {candidateValuesContent.values.map((value) => (
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

      <section className="border-y border-border bg-surface py-12 sm:py-16">
        <Container>
          <SectionHeading title={candidateExpectationsContent.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {candidateExpectationsContent.items.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-border bg-white/60 p-8 shadow-sm"
              >
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            title={candidateResponsibilityContent.title}
            description={candidateResponsibilityContent.description}
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {candidateResponsibilityContent.levels.map((level, index) => (
              <li
                key={level.title}
                className="rounded-card border border-border bg-white/60 p-8 shadow-sm"
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

      <section
        id="candidatura"
        className="scroll-mt-24 border-t border-border bg-surface py-12 sm:py-16"
      >
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title={candidateFormContent.title}
              description={candidateFormContent.description}
            />
            <div className="mt-10">
              <CandidateForm />
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              {candidateFormContent.privacyNote} Más información en la{" "}
              <Link
                href="/privacidad-candidatos"
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                política de privacidad para candidatos
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
      <JsonLd
        data={webPageJsonLd({
          title: "Trabaja con Danae",
          description: pageDescription,
          path: "/trabaja-con-danae",
          breadcrumbName: "Trabaja con Danae",
        })}
      />
    </main>
  );
}
