import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Sectores", href: "/sectores" },
  { label: "Trabaja con Danahe", href: "/trabaja-con-danahe" },
];

/** The one prominent button: commercial contact, not candidates. */
export const ctaNavigation: NavigationItem = {
  label: "Contacto",
  href: "/contacto",
};

/** Single label for the main call to action across the whole site. */
export const primaryCta: NavigationItem = {
  label: "Cuéntanos tu necesidad",
  href: "/contacto",
};

// Footer columns
export const siteNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Sectores", href: "/sectores" },
  { label: "Contacto", href: "/contacto" },
];

export const talentNavigation: NavigationItem[] = [
  { label: "Trabaja con Danahe", href: "/trabaja-con-danahe" },
  { label: "Privacidad de candidatos", href: "/privacidad-candidatos" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
];
