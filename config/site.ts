// Centralized site, contact and business information.
// Missing values stay empty on purpose: do not invent legal or contact data.
export const siteConfig = {
  name: "Danahe Talent",
  legalName: "Danahe",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  email: "",
  candidateEmail: "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  location: "Galicia",
  social: {
    linkedin: "",
    instagram: "",
  },
};

export const siteDescription =
  "Danahe diseña soluciones de talento y operaciones: seleccionamos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.";
