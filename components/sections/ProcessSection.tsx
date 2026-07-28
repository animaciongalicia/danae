import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processContent } from "@/content/home";

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={processContent.eyebrow}
          title={processContent.title}
        />
        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processContent.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col">
              <span
                aria-hidden="true"
                className="font-serif text-3xl text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
