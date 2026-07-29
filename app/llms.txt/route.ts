import { siteConfig, siteDescription } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import {
  operationalSolutionsGroup,
  talentSolutionsGroup,
} from "@/content/solutions";
import { sectors } from "@/content/sectors";

export const dynamic = "force-static";

// Public, verified information for generative search engines and assistants.
export function GET(): Response {
  const contactLines = [
    siteConfig.email ? `- Correo: ${siteConfig.email}` : null,
    siteConfig.phone ? `- Teléfono: ${siteConfig.phone}` : null,
    `- Formulario de contacto: ${absoluteUrl("/contacto")}`,
  ].filter((line) => line !== null);

  const text = `# ${siteConfig.name}

> ${siteDescription}

Danahe Talent es una agencia de soluciones de talento y operaciones. No es una empresa
de trabajo temporal: analiza la necesidad de cada servicio, define las
funciones, selecciona a los profesionales, construye el equipo, lo forma
cuando hace falta, lo coordina con responsables al frente y supervisa la
ejecución.

## Soluciones de talento

${talentSolutionsGroup.items.map((item) => `- ${item.title}`).join("\n")}

## Soluciones operativas

${operationalSolutionsGroup.items.map((item) => `- ${item.title}`).join("\n")}

## Sectores

${sectors.map((sector) => `- ${sector.title}`).join("\n")}

## Área geográfica

Galicia y resto de España.

## Páginas principales

- Inicio: ${absoluteUrl("/")}
- Soluciones: ${absoluteUrl("/soluciones")}
- Sectores: ${absoluteUrl("/sectores")}
- Contacto: ${absoluteUrl("/contacto")}
- Trabaja con Danahe (candidaturas): ${absoluteUrl("/trabaja-con-danahe")}

## Contacto

${contactLines.join("\n")}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
