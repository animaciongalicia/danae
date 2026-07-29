import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/sections/CallToAction";
import SolutionAccordion from "@/components/sections/SolutionAccordion";
import SolutionExplorer from "@/components/sections/SolutionExplorer";
import JsonLd from "@/components/seo/JsonLd";
import SitePhoto from "@/components/ui/SitePhoto";
import { sitePhotos } from "@/content/photos";
import { servicesJsonLd, webPageJsonLd } from "@/lib/structuredData";
import { solutionGroups, solutionsPageContent } from "@/content/solutions";

const pageDescription =
  "Selección de perfiles, mandos intermedios, refuerzos y formación; barras, festivales, congresos, promociones y recintos deportivos. Así resuelve Danahe cada servicio.";

export const metadata: Metadata = {
  title: "Soluciones de talento y operaciones",
  description: pageDescription,
  alternates: { canonical: "/soluciones" },
};

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow={solutionsPageContent.eyebrow}
            title={solutionsPageContent.title}
            description={solutionsPageContent.description}
          />
          <nav aria-label="Grupos de soluciones" className="mt-8">
            <ul className="flex flex-wrap gap-3">
              {solutionGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${group.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
                  >
                    {group.title}
                    <span className="text-xs text-muted">
                      {group.items.length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {solutionGroups.map((group, index) => (
        <Fragment key={group.id}>
          {index === 1 ? (
            <section className="py-10 sm:py-12">
              <Container>
                <SitePhoto
                  photo={sitePhotos.solutionsBand}
                  aspect="3/1"
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  frame="fade"
                />
              </Container>
            </section>
          ) : null}
          <section
            id={group.id}
            className={
              index % 2 === 1
                ? "scroll-mt-24 border-y border-border bg-surface py-12 sm:py-16"
                : "scroll-mt-24 py-12 sm:py-16"
            }
          >
            <Container>
              <SectionHeading
                title={group.title}
                description={group.description}
              />
              <SolutionExplorer groupId={group.id} items={group.items}>
                <SolutionAccordion items={group.items} className="mt-6" />
              </SolutionExplorer>
            </Container>
          </section>
        </Fragment>
      ))}

      <section className="py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted">
            ¿Tu necesidad encaja en varios bloques, o en ninguno del todo? Es lo
            normal. Cuéntanos el servicio en la{" "}
            <Link
              href="/contacto"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              página de contacto
            </Link>{" "}
            y diseñamos la solución a medida. También puedes ver{" "}
            <Link
              href="/sectores"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              cómo trabajamos en tu sector
            </Link>
            .
          </p>
        </Container>
      </section>

      <CallToAction />
      <JsonLd
        data={webPageJsonLd({
          title: "Soluciones de talento y operaciones",
          description: pageDescription,
          path: "/soluciones",
          breadcrumbName: "Soluciones",
        })}
      />
      <JsonLd data={servicesJsonLd()} />
    </main>
  );
}
