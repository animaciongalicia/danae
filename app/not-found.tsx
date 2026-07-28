import Link from "next/link";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-strong">
          Error 404
        </p>
        <h1 className="mt-3 font-serif text-4xl text-balance">
          Esta página no existe
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/soluciones" variant="secondary">
            Ver soluciones
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-muted">
          ¿Buscabas algo concreto?{" "}
          <Link
            href="/contacto"
            className="font-medium text-accent-strong underline-offset-4 hover:underline"
          >
            Escríbenos
          </Link>
          .
        </p>
      </Container>
    </main>
  );
}
