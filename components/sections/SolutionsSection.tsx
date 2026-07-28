import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/config/services";
import { positioningContent } from "@/content/home";

export default function SolutionsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Soluciones"
          title={positioningContent.title}
          description={positioningContent.description}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/soluciones" variant="secondary">
            Conocer las soluciones en detalle
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
