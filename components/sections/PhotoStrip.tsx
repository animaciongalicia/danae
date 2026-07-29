import Container from "@/components/ui/Container";
import SitePhoto from "@/components/ui/SitePhoto";
import { photoStripContent } from "@/content/home";
import { sitePhotos } from "@/content/photos";

const gridColumns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export default function PhotoStrip() {
  // Only the photos already available, so the band never shows empty frames.
  const photos = sitePhotos.strip.filter((photo) => photo.src);
  if (photos.length === 0) return null;

  return (
    <section aria-label={photoStripContent.title} className="py-14 sm:py-16">
      <Container>
        <div
          className={`mx-auto grid max-w-4xl gap-6 ${gridColumns[photos.length] ?? "sm:grid-cols-3"}`}
        >
          {photos.map((photo) => (
            <SitePhoto
              key={photo.caption}
              photo={photo}
              aspect="4/5"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
