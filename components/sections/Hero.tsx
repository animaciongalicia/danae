import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import SitePhoto from "@/components/ui/SitePhoto";
import { heroContent } from "@/content/home";
import { sitePhotos } from "@/content/photos";

export default function Hero() {
  const hasPhoto = Boolean(sitePhotos.homeHero.src);

  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <div
          className={`grid items-center gap-10 ${hasPhoto ? "lg:grid-cols-5" : ""}`}
        >
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
          <SitePhoto
            photo={sitePhotos.homeHero}
            aspect="4/5"
            sizes="(max-width: 1024px) 100vw, 400px"
            frame="bare"
            priority
            showCaption={false}
            className="mx-auto w-full max-w-sm lg:col-span-2"
          />
        </div>
      </Container>
    </section>
  );
}
