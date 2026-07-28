import type { Metadata } from "next";
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
  const contactDetails = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "Teléfono", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  ].filter((item) => item.value);

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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="sr-only">Formulario de contacto</h2>
              <ContactForm />
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="font-serif text-xl">Datos de contacto</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {contactDetails.map((item) => (
                    <li key={item.label}>
                      <span className="font-medium text-foreground">
                        {item.label}:
                      </span>{" "}
                      <a
                        href={item.href}
                        className="text-accent-strong underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                  <li>
                    <span className="font-medium text-foreground">
                      Ubicación:
                    </span>{" "}
                    {siteConfig.location}
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  El formulario es la vía más rápida para llegar al equipo:
                  respondemos todas las solicitudes.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                ¿Buscas trabajar con nosotros? Envía tu candidatura desde la
                página{" "}
                <a
                  href="/trabaja-con-danae"
                  className="font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  Trabaja con Danae
                </a>
                .
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
