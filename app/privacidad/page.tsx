import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad del sitio web de DANAHE: cómo tratamos los datos personales de las personas que nos contactan.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-5 leading-relaxed text-muted">
          Esta política describe cómo tratamos los datos personales de las
          personas que se ponen en contacto con DANAHE a través de este sitio
          web, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica
          3/2018 (LOPDGDD). Si nos escribes como candidato o candidata,
          consulta también la política de privacidad para candidatos.
        </p>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Responsable del tratamiento</h2>
          <ul className="mt-3 space-y-2 leading-relaxed text-muted">
            <li>Responsable: {siteConfig.legalName || "[NOMBRE]"}</li>
            <li>NIF/CIF: [NIF/CIF]</li>
            <li>Domicilio: [DOMICILIO]</li>
            <li>Correo electrónico: {siteConfig.email || "[CORREO]"}</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Finalidad del tratamiento</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Los datos facilitados a través del formulario de contacto se
            utilizan exclusivamente para atender tu solicitud, responder a tus
            consultas y, en su caso, preparar una propuesta de servicios. No se
            utilizan para enviar comunicaciones comerciales no solicitadas.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Legitimación</h2>
          <p className="mt-3 leading-relaxed text-muted">
            La base legal del tratamiento es tu consentimiento, prestado al
            marcar la casilla de aceptación del formulario, y la aplicación de
            medidas precontractuales cuando solicitas información sobre
            nuestros servicios.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Destinatarios</h2>
          <p className="mt-3 leading-relaxed text-muted">
            No se ceden datos a terceros, salvo obligación legal. Para el envío
            de los formularios se utilizan proveedores de servicios técnicos de
            correo electrónico que actúan como encargados del tratamiento:
            [PROVEEDORES].
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">Conservación</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Los datos se conservan durante el tiempo necesario para atender tu
            solicitud y, como máximo, durante [PLAZO DE CONSERVACIÓN], sin
            perjuicio de los plazos exigidos por la normativa aplicable.
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
