import { principles } from "../../data/principles";
import { Reveal } from "../ui/Reveal";

export function DevelopmentPrinciples() {
  return (
    <section aria-label="Development principles" className="px-6 py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, i) => {
          const Icon = principle.icon;
          return (
            <Reveal key={principle.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{principle.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
