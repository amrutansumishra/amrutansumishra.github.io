import { Hero } from "../components/hero/Hero";
import { TechnologyStrip } from "../components/technologies/TechnologyStrip";
import { FeaturedProjects } from "../components/projects/FeaturedProjects";
import { ExperienceSection } from "../components/experience/ExperienceSection";
import { DevelopmentPrinciples } from "../components/principles/DevelopmentPrinciples";
import { CTASection } from "../components/cta/CTASection";

export default function Home() {
  return (
    <>
      <title>Amrutansu Mishra — Frontend React Developer</title>
      <meta
        name="description"
        content="Amrutansu Mishra is a Frontend React Developer with 5+ years of experience building scalable, user-centric web applications with React, TypeScript, and modern tooling."
      />
      <link rel="canonical" href="https://amrumi.dev/" /* TODO: replace with real domain */ />
      <meta property="og:title" content="Amrutansu — Frontend React Developer" />
      <meta
        property="og:description"
        content="Frontend React Developer building scalable, user-centric web applications."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <main>
        <Hero />
        <TechnologyStrip />
        <FeaturedProjects />
        <ExperienceSection />
        <DevelopmentPrinciples />
        <CTASection />
      </main>
    </>
  );
}
