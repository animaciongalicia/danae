import Container from "@/components/ui/Container";
import { founderContent } from "@/content/home";

export default function FounderSection() {
  return (
    <section className="border-y border-border bg-accent-soft/60 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-5">
          {/* Reserved visual area until a real portrait is available. */}
          <div
            aria-hidden="true"
            className="mx-auto flex aspect-4/5 w-full max-w-xs items-center justify-center rounded-card border border-border bg-surface md:col-span-2"
          >
            <span className="font-serif text-5xl text-accent">ED</span>
          </div>
          <div className="md:col-span-3">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {founderContent.eyebrow}
            </p>
            <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl">
              {founderContent.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-accent-strong">
              {founderContent.role}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {founderContent.description}
            </p>
            <p className="mt-4 text-xs italic text-muted">
              {founderContent.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
