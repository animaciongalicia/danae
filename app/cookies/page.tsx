import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies del sitio web de DANAE: este sitio no utiliza cookies de análisis, publicidad ni seguimiento.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="flex-1 py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl">Política de cookies</h1>

        <section className="mt-10">
          <h2 className="font-serif text-xl">¿Qué son las cookies?</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Las cookies son pequeños archivos que los sitios web pueden
            almacenar en tu navegador para recordar información sobre tu
            visita.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Cookies que utiliza este sitio</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Este sitio web no utiliza cookies de análisis, de publicidad ni de
            seguimiento, ni incorpora servicios de terceros que las instalen.
            Únicamente podrían emplearse cookies o mecanismos técnicos
            estrictamente necesarios para el funcionamiento del sitio, que no
            requieren consentimiento conforme a la normativa vigente.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Cómo gestionar las cookies</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Puedes configurar tu navegador para bloquear o eliminar cookies en
            cualquier momento a través de sus opciones de privacidad. Consulta
            la ayuda de tu navegador para conocer los pasos concretos.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Actualizaciones</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Si en el futuro este sitio incorporase cookies que requieran
            consentimiento, esta política se actualizará y se solicitará el
            consentimiento correspondiente antes de su instalación.
          </p>
        </section>
      </Container>
    </main>
  );
}
