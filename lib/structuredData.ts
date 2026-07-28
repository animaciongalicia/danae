import { siteConfig, siteDescription } from "@/config/site";
import { absoluteUrl, getSiteUrl } from "@/lib/utils";
import { solutionGroups } from "@/content/solutions";
import { faqContent } from "@/content/faq";

// JSON-LD builders. Only verified public data: no addresses, opening hours,
// coordinates, ratings or registry data are ever emitted.

function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}

export function organizationJsonLd(): Record<string, unknown> {
  const organization: Record<string, unknown> = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId(),
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteDescription,
    areaServed: ["Galicia", "España"],
  };

  if (siteConfig.legalName) {
    organization.legalName = siteConfig.legalName;
  }

  const sameAs = [siteConfig.social.linkedin, siteConfig.social.instagram].filter(
    Boolean,
  );
  if (sameAs.length > 0) {
    organization.sameAs = sameAs;
  }

  if (siteConfig.email || siteConfig.phone) {
    organization.contactPoint = {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "es",
      ...(siteConfig.email ? { email: siteConfig.email } : {}),
      ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    };
  }

  return organization;
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: siteConfig.name,
    url: getSiteUrl(),
    inLanguage: "es",
    publisher: { "@id": organizationId() },
  };
}

interface PageJsonLdInput {
  title: string;
  description: string;
  path: string;
  breadcrumbName?: string;
}

export function webPageJsonLd({
  title,
  description,
  path,
  breadcrumbName,
}: PageJsonLdInput): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
      url: absoluteUrl(path),
      name: title,
      description,
      inLanguage: "es",
      isPartOf: { "@id": `${getSiteUrl()}/#website` },
    },
  ];

  if (breadcrumbName) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbName,
          item: absoluteUrl(path),
        },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function siteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), webSiteJsonLd()],
  };
}

export function servicesJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": solutionGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Service",
        name: item.title,
        description: item.action,
        serviceType: group.title,
        areaServed: ["Galicia", "España"],
        provider: { "@id": organizationId() },
        url: absoluteUrl("/soluciones"),
      })),
    ),
  };
}

export function faqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
