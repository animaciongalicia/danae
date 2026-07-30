// Centralized site, contact and business information.
// Missing values stay empty on purpose: do not invent legal or contact data.
export const siteConfig = {
  name: "Danahe Talent",
  legalName: "Danahe Talent",
  // Must match the primary domain configured in Vercel (www), so canonical
  // URLs and the sitemap never point at a URL that redirects.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danahetalent.com",
  email: "info@danahetalent.com",
  candidateEmail: "info@danahetalent.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+34 711 72 36 30",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+34 711 72 36 30",
  location: "A Coruña, Galicia",
  social: {
    linkedin: "",
    instagram: "",
  },
};

export const siteDescription =
  "Danahe Talent diseña soluciones de talento y operaciones: seleccionamos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.";
