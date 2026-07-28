import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos cómo es tu servicio y qué necesitas: analizamos tu caso y te proponemos una solución de equipo y operación a medida.",
};

export default function ContactPage() {
  const whatsappHref = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
    : "";

  const inquiryTypes = [
    {
      title: "Necesito una solución",
      description:
        "Eres una empresa u organización y necesitas un equipo o una operación resuelta. Usa el formulario de esta página.",
      cta: { label: "Ir al formulario", href: "#formulario" },
    },
    {
      title: "Quiero trabajar con Danae",
      description:
        "Quieres formar parte de nuestros equipos. Envíanos tu candidatura desde la página Trabaja con Danae.",
      cta: { label: "Enviar candidatura", href: "/trabaja-con-danae" },
    },
  ];

  return (
    <main className="flex-1">
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contacto"
            title="Cuéntanos cómo es tu servicio"
            description="Escríbenos con el máximo detalle posible: tipo de servicio, fechas y volumen aproximado. Analizamos tu necesidad y te respondemos con una propuesta clara."
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="sr-only">Tipos de consulta</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {inquiryTypes.map((type) => (
              <div
                key={type.title}
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
              <h2 className="font-serif text-2xl">Necesito una solución</h2>
              <p className="mt-3 max-w-xl text-muted">
                Rellena el formulario y te contactamos para entender tu
                necesidad y proponerte una solución.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-card border border-border bg-surface p-8">
                <h2 className="font-serif text-xl">Datos de contacto</h2>
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

                <div className="mt-6 flex flex-col gap-3">
                  {siteConfig.phone ? (
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center rounded-full bg-accent-strong px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
                    >
                      Llamar por teléfono
                    </a>
                  ) : null}
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-accent-strong px-6 py-3 text-sm font-medium text-accent-strong transition-colors hover:bg-accent-strong hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
                    >
                      Escribir por WhatsApp
                    </a>
                  ) : null}
                  {!siteConfig.phone && !whatsappHref ? (
                    <p className="text-xs italic text-muted">
                      Los botones de llamada y WhatsApp se activarán al
                      configurar el teléfono en la configuración del sitio.
                    </p>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
