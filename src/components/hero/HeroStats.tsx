// TODO: Replace with your real, verifiable numbers.
import {stats} from "../../data/experience.ts";

export function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-2xl font-bold text-transparent sm:text-[28px]">
            {stat.value}
          </dd>
          <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
