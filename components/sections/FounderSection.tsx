import Container from "@/components/ui/Container";
import SitePhoto from "@/components/ui/SitePhoto";
import { founderContent } from "@/content/home";
import { sitePhotos } from "@/content/photos";

export default function FounderSection() {
  const hasPortrait = Boolean(sitePhotos.founder.src);

  return (
    <section className="border-y border-border bg-accent-soft/60 py-14 sm:py-16">
      <Container>
        <div
          className={`grid items-center gap-12 ${hasPortrait ? "md:grid-cols-5" : ""}`}
        >
          <SitePhoto
            photo={sitePhotos.founder}
            aspect="4/5"
            sizes="(max-width: 768px) 100vw, 320px"
            showCaption={false}
            className="mx-auto w-full max-w-xs md:col-span-2"
          />
          <div className={hasPortrait ? "md:col-span-3" : "max-w-3xl"}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-strong">
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
