import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/sections/CallToAction";
import JsonLd from "@/components/seo/JsonLd";
import SitePhoto from "@/components/ui/SitePhoto";
import { webPageJsonLd } from "@/lib/structuredData";
import { sectors, sectorsPageContent } from "@/content/sectors";
import { sectorPhotos } from "@/content/photos";

const pageDescription =
  "Festivales, congresos, empresas, hostelería, comercio, deporte, agencias, productoras y administraciones públicas: cómo adapta Danahe sus equipos y operaciones a cada sector.";

export const metadata: Metadata = {
  title: "Sectores donde trabajamos",
  description: pageDescription,
  alternates: { canonical: "/sectores" },
};

export default function SectorsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-12 sm:py-16">
          <SectionHeading
            as="h1"
            eyebrow={sectorsPageContent.eyebrow}
            title={sectorsPageContent.title}
            description={sectorsPageContent.description}
          />
          {/* Anchor list would fill a whole phone screen; on mobile the list
              itself is the navigation. */}
          <nav aria-label="Sectores" className="mt-8 hidden sm:block">
            <ul className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li key={sector.id}>
                  <a
                    href={`#${sector.id}`}
                    className="inline-block rounded-full border border-border bg-white/60 px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-strong"
                  >
                    {sector.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section className="py-6 sm:py-8">
        <Container>
          <h2 className="sr-only">Sectores en los que trabajamos</h2>
          <ol className="divide-y divide-border">
            {sectors.map((sector, index) => (
              <li
                key={sector.id}
                id={sector.id}
                className="scroll-mt-24 py-10 md:grid md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-2">
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className={`mt-3 md:mt-0 ${
                    sectorPhotos[sector.id] ? "md:col-span-7" : "md:col-span-10"
                  }`}
                >
                  <h3 className="font-serif text-2xl">{sector.title}</h3>
                  <p className="mt-3 font-serif text-lg italic leading-relaxed text-foreground">
                    {sector.scene}
                  </p>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                    {sector.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {sector.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted"
                      >
                        {highlight.replace(/\.$/, "")}
                      </li>
                    ))}
                  </ul>
                </div>
                {sectorPhotos[sector.id] ? (
                  <SitePhoto
                    photo={sectorPhotos[sector.id]}
                    aspect="4/5"
                    sizes="(max-width: 768px) 100vw, 300px"
                    showCaption={false}
                    className="mt-6 w-full max-w-xs md:col-span-3 md:mt-0"
                  />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-muted">
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
      <JsonLd
        data={webPageJsonLd({
          title: "Sectores donde trabajamos",
          description: pageDescription,
          path: "/sectores",
          breadcrumbName: "Sectores",
        })}
      />
    </main>
  );
}
