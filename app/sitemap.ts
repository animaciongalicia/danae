import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

const routes = [
  "/",
  "/soluciones",
  "/sectores",
  "/contacto",
  "/trabaja-con-danahe",
  "/aviso-legal",
  "/privacidad",
  "/privacidad-candidatos",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }));
}
