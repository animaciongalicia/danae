import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { heroContent } from "@/content/home";

export default function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <div className="max-w-3xl lg:col-span-3">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-strong">
              {heroContent.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {heroContent.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={heroContent.secondaryCta.href}
                variant="secondary"
              >
                {heroContent.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <PhotoPlaceholder
            aspect="4/5"
            label="Equipo DANAE en servicio"
            className="mx-auto hidden w-full max-w-sm lg:col-span-2 lg:block"
          />
        </div>
      </Container>
    </section>
  );
}
