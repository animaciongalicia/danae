import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PhotoStrip from "@/components/sections/PhotoStrip";
import SectorsSection from "@/components/sections/SectorsSection";
import DifferentialSection from "@/components/sections/DifferentialSection";
import FounderSection from "@/components/sections/FounderSection";
import CallToAction from "@/components/sections/CallToAction";
import JsonLd from "@/components/seo/JsonLd";
import { webPageJsonLd } from "@/lib/structuredData";
import { siteConfig, siteDescription } from "@/config/site";
import {
  homeOperationsContent,
  homeTalentContent,
} from "@/content/home";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <ProblemSection />
      <SolutionsSection
        eyebrow={homeTalentContent.eyebrow}
        title={homeTalentContent.title}
        description={homeTalentContent.description}
        items={homeTalentContent.items}
        anchor="soluciones-de-talento"
        cta={homeTalentContent.cta}
        tone="surface"
      />
      <SolutionsSection
        eyebrow={homeOperationsContent.eyebrow}
        title={homeOperationsContent.title}
        description={homeOperationsContent.description}
        items={homeOperationsContent.items}
        anchor="soluciones-operativas"
        cta={homeOperationsContent.cta}
      />
      <ResultsSection />
      <ProcessSection />
      <PhotoStrip />
      <SectorsSection />
      <DifferentialSection />
      <FounderSection />
      <CallToAction />
      <JsonLd
        data={webPageJsonLd({
          title: `${siteConfig.name} — Soluciones de talento y operaciones`,
          description: siteDescription,
          path: "/",
        })}
      />
    </main>
  );
}
