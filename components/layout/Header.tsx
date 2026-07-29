import Link from "next/link";
import { ctaNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "@/components/layout/MobileNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-foreground"
        >
          Danahe
          <span className="sr-only"> — {siteConfig.name}, inicio</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNavigation.map((item) => (
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

        <div className="hidden md:block">
          <Link
            href={ctaNavigation.href}
            className="inline-flex items-center rounded-full border border-accent-strong px-5 py-2 text-sm font-medium text-accent-strong transition-colors hover:bg-accent-strong hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          >
            {ctaNavigation.label}
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
