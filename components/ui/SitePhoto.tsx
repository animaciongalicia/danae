import Image from "next/image";
import type { SitePhotoData } from "@/content/photos";

const aspectClasses = {
  "4/5": "aspect-4/5",
  "4/3": "aspect-4/3",
  "3/2": "aspect-3/2",
} as const;

interface SitePhotoProps {
  photo: SitePhotoData;
  aspect: keyof typeof aspectClasses;
  /** Passed to next/image so the browser downloads the right size. */
  sizes: string;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
}

/**
 * Renders a real photograph when `photo.src` is set, and a reserved area with
 * the same proportions while the image is still pending.
 */
export default function SitePhoto({
  photo,
  aspect,
  sizes,
  priority = false,
  className = "",
  showCaption = true,
}: SitePhotoProps) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspectClasses[aspect]} w-full overflow-hidden rounded-card border border-border bg-surface shadow-sm`}
      >
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-serif text-4xl text-accent"
          >
            D
          </span>
        )}
      </div>
      {showCaption ? (
        <figcaption className="mt-2 text-xs uppercase tracking-widest text-muted">
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
