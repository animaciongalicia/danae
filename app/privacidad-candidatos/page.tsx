import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacidad para candidatos",
  description:
    "Política de privacidad para candidatos de Danahe: cómo tratamos los datos personales de quienes envían su candidatura.",
  alternates: { canonical: "/privacidad-candidatos" },
};

export default function CandidatePrivacyPage() {
  return (
    <main className="flex-1 py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl">
          Política de privacidad para candidatos
        </h1>
        <p className="mt-5 leading-relaxed text-muted">
          Esta política describe cómo tratamos los datos personales de las
          personas que envían su candidatura a Danahe a través del formulario
          «Trabaja con Danahe», conforme al Reglamento (UE) 2016/679 (RGPD) y a
          la Ley Orgánica 3/2018 (LOPDGDD).
        </p>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Responsable del tratamiento</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-muted">
            <li>Responsable: {siteConfig.legalName || "[NOMBRE]"}</li>
            <li>NIF/CIF: [NIF/CIF]</li>
            <li>Domicilio: [DOMICILIO]</li>
            <li>
              Correo electrónico: {siteConfig.candidateEmail || "[CORREO]"}
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Finalidad del tratamiento</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Los datos de tu candidatura se utilizan exclusivamente para
            valorar tu perfil e incorporarlo, en su caso, a los procesos de
            selección de los servicios que gestiona Danahe, y para contactarte
            en relación con dichos procesos.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Legitimación</h2>
          <p className="mt-3 leading-relaxed text-muted">
            La base legal del tratamiento es tu consentimiento, prestado al
            marcar la casilla de aceptación del formulario, y la aplicación de
            medidas precontractuales a petición tuya como persona candidata.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Destinatarios</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Tus datos no se ceden a terceros, salvo obligación legal. Cuando
            un proceso de selección lo requiera, se podrán comunicar los datos
            imprescindibles a la empresa cliente para la que se organiza el
            servicio, y siempre en relación con dicho proceso. Para el envío de
            los formularios se utilizan proveedores de servicios técnicos de
            correo electrónico que actúan como encargados del tratamiento:
            [PROVEEDORES].
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Conservación</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Los datos de tu candidatura se conservan mientras se mantengan
            abiertos los procesos de selección para los que resulte relevante
            tu perfil. Si autorizaste su conservación para futuros procesos, se
            conservarán como máximo durante [PLAZO DE CONSERVACIÓN]. Puedes
            solicitar su supresión en cualquier momento.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Derechos</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación del tratamiento y portabilidad escribiendo al
            email de contacto indicado más arriba. También puedes presentar una
            reclamación ante la Agencia Española de Protección de Datos
            (www.aepd.es).
          </p>
        </section>
      </Container>
    </main>
  );
}
