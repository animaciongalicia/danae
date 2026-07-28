"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ctaNavigation, mainNavigation } from "@/config/navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
      >
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="h-6 w-6"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          aria-label="Navegación principal"
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm"
        >
          <ul className="flex flex-col px-6 py-4">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base text-foreground hover:text-accent-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-4 pb-2">
              <Link
                href={ctaNavigation.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center rounded-full border border-accent-strong px-5 py-2 text-sm font-medium text-accent-strong"
              >
                {ctaNavigation.label}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
