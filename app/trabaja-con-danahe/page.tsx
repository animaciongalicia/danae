import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CandidateForm from "@/components/forms/CandidateForm";
import SitePhoto from "@/components/ui/SitePhoto";
import JsonLd from "@/components/seo/JsonLd";
import { sitePhotos } from "@/content/photos";
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
  "Envía tu candidatura a Danahe: personal de barra y sala, azafatas y azafatos, promotores, administrativos, recepcionistas y mandos intermedios para servicios bien organizados.";

export const metadata: Metadata = {
  title: "Trabaja con Danahe",
  description: pageDescription,
  alternates: { canonical: "/trabaja-con-danahe" },
};

export default function WorkWithDanahePage() {
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
          <h2 className="font-serif text-2xl">
            {candidateProfilesContent.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            {candidateProfilesContent.description}
          </p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {candidateProfilesContent.profiles.map((profile) => (
              <li
                key={profile}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-white/60 px-4 py-2 text-sm text-foreground shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {profile}
              </li>
            ))}
          </ul>

          <SitePhoto
            photo={sitePhotos.candidatesTeam}
            aspect="3/2"
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="mt-10"
          />

          <h2 className="mt-14 font-serif text-2xl">
            {candidateValuesContent.title}
          </h2>
          <dl className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {candidateValuesContent.values.map((value) => (
              <div key={value.title} className="border-t border-border pt-4">
                <dt className="font-serif text-lg">{value.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
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
          title: "Trabaja con Danahe",
          description: pageDescription,
          path: "/trabaja-con-danahe",
          breadcrumbName: "Trabaja con Danahe",
        })}
      />
    </main>
  );
}
