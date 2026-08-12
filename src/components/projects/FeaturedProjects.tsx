import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-label="Featured projects" className="px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeading
            title="Featured Projects"
            action={
              <a
                href="#projects"
                className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 sm:inline-flex"
              >
                View All Projects
                <ArrowRight size={15} />
              </a>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
