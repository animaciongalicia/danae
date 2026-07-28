import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import FaqSection from "@/components/sections/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, webPageJsonLd } from "@/lib/structuredData";
import { siteConfig } from "@/config/site";
import {
  contactChannelsContent,
  contactFormIntroContent,
  contactPageContent,
  inquiryTypesContent,
} from "@/content/contact";

const pageDescription =
  "Solicita una propuesta a DANAE: cuéntanos tu servicio, fechas y volumen, y te respondemos con una solución de talento y operaciones a medida. También por teléfono o WhatsApp.";

export const metadata: Metadata = {
  title: "Contacto",
  description: pageDescription,
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  const whatsappHref = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(contactChannelsContent.whatsappMessage)}`
    : "";

  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow={contactPageContent.eyebrow}
            title={contactPageContent.title}
            description={contactPageContent.description}
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="sr-only">Tipos de consulta</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {inquiryTypesContent.map((type) => (
              <div
                key={type.id}
                className="flex h-full flex-col rounded-card border border-border bg-white/60 p-8"
              >
                <h3 className="font-serif text-xl">{type.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {type.description}
                </p>
                <p className="mt-5">
                  <Link
                    href={type.cta.href}
                    className="text-sm font-medium text-accent-strong underline-offset-4 hover:underline"
                  >
                    {type.cta.label}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="formulario" className="scroll-mt-24 pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl">
                {contactFormIntroContent.title}
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                {contactFormIntroContent.description}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-card border border-border bg-surface p-8">
                <h2 className="font-serif text-xl">
                  {contactChannelsContent.title}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {siteConfig.email ? (
                    <li>
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-accent-strong underline-offset-4 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <span className="font-medium text-foreground">
                      Ubicación:
                    </span>{" "}
                    {siteConfig.location}
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {contactChannelsContent.note}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  {siteConfig.phone ? (
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
                    >
                      {contactChannelsContent.phoneLabel}
                    </a>
                  ) : null}
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-accent-strong px-6 py-3 text-sm font-medium text-accent-strong transition-colors hover:bg-accent-strong hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
                    >
                      {contactChannelsContent.whatsappLabel}
                    </a>
                  ) : null}
                  {!siteConfig.phone && !whatsappHref ? (
                    <p className="text-xs italic text-muted">
                      {contactChannelsContent.pendingNote}
                    </p>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FaqSection />
      <JsonLd
        data={webPageJsonLd({
          title: "Contacto",
          description: pageDescription,
          path: "/contacto",
          breadcrumbName: "Contacto",
        })}
      />
      <JsonLd data={faqJsonLd()} />
    </main>
  );
}
