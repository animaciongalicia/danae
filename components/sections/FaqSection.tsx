import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqContent } from "@/content/faq";

export default function FaqSection() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
        />
        <div className="mt-10 max-w-3xl divide-y divide-border">
          {faqContent.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
