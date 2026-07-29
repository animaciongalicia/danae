import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/sections/CallToAction";
import JsonLd from "@/components/seo/JsonLd";
import { servicesJsonLd, webPageJsonLd } from "@/lib/structuredData";
import { solutionGroups, solutionsPageContent } from "@/content/solutions";
import type { SolutionBlock } from "@/types";

const pageDescription =
  "Selección de perfiles, mandos intermedios, refuerzos y formación; barras, festivales, congresos, promociones y recintos deportivos. Así resuelve DANAHE cada servicio.";

export const metadata: Metadata = {
  title: "Soluciones de talento y operaciones",
  description: pageDescription,
  alternates: { canonical: "/soluciones" },
};

function SolutionBlockCard({ block }: { block: SolutionBlock }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-white/60 p-8 shadow-sm">
      <h3 className="font-serif text-xl">{block.title}</h3>
      <dl className="mt-4 flex-1 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-medium uppercase tracking-widest text-accent-strong">
            El problema
          </dt>
          <dd className="mt-1 text-muted">{block.problem}</dd>
        </div>
        <div>
          <dt className="font-medium uppercase tracking-widest text-accent-strong">
            Qué hace Danahe
          </dt>
          <dd className="mt-1 text-muted">{block.action}</dd>
        </div>
        <div>
          <dt className="font-medium uppercase tracking-widest text-accent-strong">
            El resultado que buscamos
          </dt>
          <dd className="mt-1 text-muted">{block.result}</dd>
        </div>
      </dl>
      <p className="mt-6">
        <Link
          href="/contacto"
          className="text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
        >
          Cuéntanos tu caso
        </Link>
      </p>
    </article>
  );
}

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
        </Container>
      </section>

      {solutionGroups.map((group, index) => (
        <section
          key={group.id}
          className={
            index % 2 === 1
              ? "border-y border-border bg-surface py-12 sm:py-16"
              : "py-12 sm:py-16"
          }
        >
          <Container>
            <SectionHeading title={group.title} description={group.description} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {group.items.map((block) => (
                <SolutionBlockCard key={block.id} block={block} />
              ))}
            </div>
          </Container>
        </section>
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
