import Container from "@/components/ui/Container";
import SitePhoto from "@/components/ui/SitePhoto";
import { photoStripContent } from "@/content/home";
import { sitePhotos } from "@/content/photos";

export default function PhotoStrip() {
  return (
    <section aria-label={photoStripContent.title} className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {sitePhotos.strip.map((photo) => (
            <SitePhoto
              key={photo.caption}
              photo={photo}
              aspect="4/3"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
