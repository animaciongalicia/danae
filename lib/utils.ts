import { siteConfig } from "@/config/site";

// Fallback keeps metadata, robots and sitemap valid until the real
// public URL is configured via NEXT_PUBLIC_SITE_URL.
const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl(): string {
  return siteConfig.siteUrl || fallbackSiteUrl;
}

export function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}
