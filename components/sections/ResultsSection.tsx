import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { resultsContent } from "@/content/home";

export default function ResultsSection() {
  return (
    <section className="border-y border-border bg-accent-soft/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={resultsContent.eyebrow}
          title={resultsContent.title}
          description={resultsContent.description}
        />
        <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {resultsContent.benefits.map((benefit) => (
            <div key={benefit.title}>
              <dt className="font-serif text-xl">{benefit.title}</dt>
              <dd className="mt-2 leading-relaxed text-muted">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
