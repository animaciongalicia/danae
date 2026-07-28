import Hero from "@/components/sections/Hero";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SectorsSection from "@/components/sections/SectorsSection";
import ResultsSection from "@/components/sections/ResultsSection";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <SolutionsSection />
      <ProcessSection />
      <SectorsSection />
      <ResultsSection />
      <CallToAction />
    </main>
  );
}
