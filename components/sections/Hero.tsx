import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { heroContent } from "@/content/home";

export default function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
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
            <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
