import { ExperienceTimeline } from "./ExperienceTimeline";
import { StatsGrid } from "./StatsGrid";
import { SkillsOverview } from "../skills/SkillsOverview";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience and skills" className="px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeading title="Experience Timeline" />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ExperienceTimeline />

          <div id="skills" className="flex flex-col gap-6 scroll-mt-28">
            <StatsGrid />
            <SkillsOverview />
          </div>
        </div>
      </div>
    </section>
  );
}
