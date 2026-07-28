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
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {resultsContent.groups.map((group) => (
            <div key={group.id}>
              <h3 className="border-b border-border pb-3 text-sm font-medium uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              <dl className="mt-6 space-y-7">
                {group.benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <dt className="font-serif text-xl">{benefit.title}</dt>
                    <dd className="mt-2 leading-relaxed text-muted">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
