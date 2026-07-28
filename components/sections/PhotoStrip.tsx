import Container from "@/components/ui/Container";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { photoStripContent } from "@/content/home";

export default function PhotoStrip() {
  return (
    <section aria-label={photoStripContent.title} className="py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {photoStripContent.photos.map((photo) => (
            <PhotoPlaceholder
              key={photo.id}
              aspect="4/3"
              label={photo.caption}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
