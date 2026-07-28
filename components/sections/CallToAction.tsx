import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { callToActionContent } from "@/content/home";

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl">
            {callToActionContent.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {callToActionContent.description}
          </p>
          <div className="mt-8">
            <ButtonLink href={callToActionContent.cta.href}>
              {callToActionContent.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
