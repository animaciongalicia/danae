import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { differentialContent } from "@/content/home";

export default function DifferentialSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={differentialContent.eyebrow}
          title={differentialContent.title}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {differentialContent.points.map((point) => (
            <li
              key={point.title}
              className="rounded-card border border-border bg-white/50 p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
