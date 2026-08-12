import { technologies } from "../../data/technologies";
import { Reveal } from "../ui/Reveal";

export function TechnologyStrip() {
  return (
    <section id="about" aria-label="About and technologies I work with" className="scroll-mt-28 px-6 py-10">
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="rounded-2xl border border-border bg-card/60 px-6 py-7 backdrop-blur-sm sm:px-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Technologies I Work With
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <li key={tech.name}>
                  <div className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/60 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]"
                      style={{ color: tech.color }}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
