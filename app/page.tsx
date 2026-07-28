import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SectorsSection from "@/components/sections/SectorsSection";
import DifferentialSection from "@/components/sections/DifferentialSection";
import FounderSection from "@/components/sections/FounderSection";
import CallToAction from "@/components/sections/CallToAction";
import {
  homeOperationsContent,
  homeTalentContent,
} from "@/content/home";
import {
  operationalSolutionsGroup,
  talentSolutionsGroup,
} from "@/content/solutions";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <ProblemSection />
      <SolutionsSection
        eyebrow={homeTalentContent.eyebrow}
        title={homeTalentContent.title}
        description={homeTalentContent.description}
        items={talentSolutionsGroup.items}
        cta={homeTalentContent.cta}
        tone="surface"
      />
      <SolutionsSection
        eyebrow={homeOperationsContent.eyebrow}
        title={homeOperationsContent.title}
        description={homeOperationsContent.description}
        items={operationalSolutionsGroup.items}
        cta={homeOperationsContent.cta}
      />
      <ResultsSection />
      <ProcessSection />
      <SectorsSection />
      <DifferentialSection />
      <FounderSection />
      <CallToAction />
    </main>
  );
}
