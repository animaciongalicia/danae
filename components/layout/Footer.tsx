import Link from "next/link";
import {
  ctaNavigation,
  legalNavigation,
  mainNavigation,
} from "@/config/navigation";
import { siteConfig, siteDescription } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <p className="font-serif text-2xl tracking-wide">DANAE</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteDescription}
            </p>
            <p className="mt-4 text-sm text-muted">{siteConfig.location}</p>
          </div>

          <nav aria-label="Navegación del sitio">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {[...mainNavigation, ctaNavigation].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Información legal">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
