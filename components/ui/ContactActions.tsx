import { siteConfig } from "@/config/site";
import { contactChannelsContent } from "@/content/contact";
import { absoluteUrl } from "@/lib/utils";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

interface ContactActionsProps {
  /** Path the visitor is on; travels inside the WhatsApp message. */
  source: string;
  className?: string;
}

/**
 * Call and WhatsApp buttons. The WhatsApp message carries the page it was
 * opened from, so we know where each conversation started.
 */
export default function ContactActions({
  source,
  className = "",
}: ContactActionsProps) {
  const phoneHref = siteConfig.phone
    ? `tel:${siteConfig.phone.replace(/\s/g, "")}`
    : "";

  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
  const whatsappText = `${contactChannelsContent.whatsappMessage}\n\nEscribo desde: ${absoluteUrl(source)}`;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
    : "";

  if (!phoneHref && !whatsappHref) return null;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {phoneHref ? (
        <a
          href={phoneHref}
          className={`${buttonBase} bg-accent-strong text-white hover:bg-accent-hover`}
        >
          {contactChannelsContent.phoneLabel}
        </a>
      ) : null}
      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} border border-accent-strong text-accent-strong hover:bg-accent-strong hover:text-white`}
        >
          {contactChannelsContent.whatsappLabel}
        </a>
      ) : null}
    </div>
  );
}
