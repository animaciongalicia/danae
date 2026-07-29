import Image from "next/image";
import type { SitePhotoData } from "@/content/photos";

const aspectClasses = {
  "4/5": "aspect-4/5",
  "4/3": "aspect-4/3",
  "3/2": "aspect-3/2",
  // Wide bands used once per interior page.
  "3/1": "aspect-[3/1]",
  "21/9": "aspect-[21/9]",
} as const;

// Softens both sides into the page background; only for centred compositions.
const fadeMask =
  "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]";

interface SitePhotoProps {
  photo: SitePhotoData;
  aspect: keyof typeof aspectClasses;
  /** Passed to next/image so the browser downloads the right size. */
  sizes: string;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
  /** Fades the left and right edges instead of framing the photo. */
  fade?: boolean;
}

/**
 * Renders an optimized photograph. Slots without a source render nothing, so a
 * pending photo never shows an empty frame on the live site.
 */
export default function SitePhoto({
  photo,
  aspect,
  sizes,
  priority = false,
  className = "",
  showCaption = true,
  fade = false,
}: SitePhotoProps) {
  if (!photo.src) return null;

  const frameClasses = fade
    ? fadeMask
    : "rounded-card border border-border bg-surface shadow-sm";

  return (
    <figure className={className}>
      <div
        className={`relative ${aspectClasses[aspect]} w-full overflow-hidden ${frameClasses}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {showCaption ? (
        <figcaption
          className={`mt-2 text-xs uppercase tracking-widest text-muted ${
            fade ? "text-center" : ""
          }`}
        >
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
