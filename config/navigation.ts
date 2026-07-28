import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Sectores", href: "/sectores" },
  { label: "Contacto", href: "/contacto" },
];

export const ctaNavigation: NavigationItem = {
  label: "Trabaja con Danae",
  href: "/trabaja-con-danae",
};

// Footer columns
export const talentNavigation: NavigationItem[] = [
  { label: "Trabaja con Danae", href: "/trabaja-con-danae" },
  { label: "Privacidad de candidatos", href: "/privacidad-candidatos" },
];

export const legalNavigation: NavigationItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
];
