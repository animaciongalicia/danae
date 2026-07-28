import Link from "next/link";
import {
  legalNavigation,
  mainNavigation,
  talentNavigation,
} from "@/config/navigation";
import { siteConfig, siteDescription } from "@/config/site";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-medium uppercase tracking-widest text-accent-strong">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
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
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <p className="font-serif text-2xl tracking-wide">DANAE</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteDescription}
            </p>
            <p className="mt-4 text-sm text-muted">{siteConfig.location}</p>
          </div>

          <FooterColumn title="Soluciones" items={mainNavigation} />
          <FooterColumn title="Talento" items={talentNavigation} />
          <FooterColumn title="Legal" items={legalNavigation} />
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
