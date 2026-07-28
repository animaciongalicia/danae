import type { MetadataRoute } from "next";
import { siteConfig, siteDescription } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "DANAE",
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#fbf9f6",
    theme_color: "#7c4e60",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
