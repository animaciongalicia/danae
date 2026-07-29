import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal y condiciones de uso del sitio web de Danahe.",
  alternates: { canonical: "/aviso-legal" },
};

export default function LegalNoticePage() {
  return (
    <main className="flex-1 py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl">Aviso legal</h1>

        <section className="mt-10">
          <h2 className="font-serif text-xl">1. Identificación del titular</h2>
          <p className="mt-3 leading-relaxed text-muted">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se informa de los datos del titular de este sitio web:
          </p>
          <ul className="mt-4 space-y-2 leading-relaxed text-muted">
            <li>Denominación: {siteConfig.name}</li>
            <li>Titular: {siteConfig.legalName || "[NOMBRE]"}</li>
            <li>NIF/CIF: [NIF/CIF]</li>
            <li>Domicilio: [DOMICILIO] ({siteConfig.location})</li>
            <li>Correo electrónico: {siteConfig.email || "[CORREO]"}</li>
            <li>Teléfono: {siteConfig.phone || "[TELÉFONO]"}</li>
            <li>Datos registrales: [DATOS REGISTRALES]</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">2. Objeto del sitio web</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Este sitio web tiene por objeto dar a conocer los servicios de
            Danahe Talent, agencia de soluciones de talento y operaciones, y facilitar
            el contacto de empresas interesadas y de personas candidatas.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">3. Condiciones de uso</h2>
          <p className="mt-3 leading-relaxed text-muted">
            El acceso a este sitio web es gratuito y atribuye la condición de
            usuario, que implica la aceptación de estas condiciones. El usuario
            se compromete a hacer un uso adecuado de los contenidos y a no
            emplearlos para actividades ilícitas o contrarias a la buena fe.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">4. Propiedad intelectual</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Los contenidos de este sitio web (textos, diseño, logotipos e
            imágenes) pertenecen a su titular o cuentan con autorización de
            uso. Queda prohibida su reproducción o distribución sin
            consentimiento expreso.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">5. Responsabilidad</h2>
          <p className="mt-3 leading-relaxed text-muted">
            El titular no se hace responsable del mal uso que se realice de los
            contenidos de este sitio web ni de los daños derivados de causas
            ajenas a su control, y se reserva el derecho a actualizar o
            modificar los contenidos sin previo aviso.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-xl">6. Legislación aplicable</h2>
          <p className="mt-3 leading-relaxed text-muted">
            La relación entre el titular y el usuario se regirá por la
            normativa española vigente, y cualquier controversia se someterá a
            los juzgados y tribunales que correspondan conforme a derecho.
          </p>
        </section>
      </Container>
    </main>
  );
}
