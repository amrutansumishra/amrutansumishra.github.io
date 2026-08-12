import type { ExperienceItem } from "../../data/experience";
import { Reveal } from "../ui/Reveal";

export function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <div className="relative flex gap-5 pb-10 last:pb-0">
      {/* timeline rail */}
      <div className="relative flex w-6 shrink-0 flex-col items-center">
        <span
          aria-hidden="true"
          className="z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]"
        />
        <span
          aria-hidden="true"
          className="mt-1 w-px flex-1 bg-gradient-to-b from-primary/50 to-border"
        />
      </div>

      <Reveal delay={index * 0.1} className="flex-1 pb-1">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
          {item.period}
        </p>
        <div className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30">
          <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
          <p className="mt-0.5 text-sm text-muted">{item.company}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {item.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface/60 px-2 py-1 text-[11px] font-medium text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
