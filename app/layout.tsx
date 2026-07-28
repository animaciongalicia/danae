import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig, siteDescription } from "@/config/site";
import { siteJsonLd } from "@/lib/structuredData";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const defaultTitle = `${siteConfig.name} — Soluciones de talento y operaciones`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-strong focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <div id="contenido" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
        <JsonLd data={siteJsonLd()} />
      </body>
    </html>
  );
}
