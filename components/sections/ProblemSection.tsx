import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { problemContent } from "@/content/home";

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={problemContent.eyebrow}
          title={problemContent.title}
          description={problemContent.description}
        />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {problemContent.problems.map((problem) => (
            <li key={problem.title} className="flex gap-4">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <div>
                <h3 className="font-serif text-xl">{problem.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {problem.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
