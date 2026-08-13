import { Calendar, FolderCheck, Smile, GitCommitHorizontal } from "lucide-react";
import { experienceStats } from "../../data/experience";
import { Reveal } from "../ui/Reveal";

const icons = [Calendar, FolderCheck, Smile, GitCommitHorizontal];

export function StatsGrid() {
  return (
    <Reveal>
      <div className="grid grid-cols-4 gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
        {experienceStats.map((stat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={stat.label} className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={16} aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-foreground">{stat.value}</span>
              <span className="text-[11px] leading-tight text-muted">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
