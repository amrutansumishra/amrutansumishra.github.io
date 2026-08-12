import { motion, useReducedMotion } from "framer-motion";
import { skills, levelToWidth } from "../../data/skills";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsOverview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal delay={0.1}>
      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
        <SectionHeading title="Skills Overview" className="mb-6" />
        <ul className="flex flex-col gap-5">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs font-medium text-primary">{skill.level}</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-surface-secondary"
                role="img"
                aria-label={`${skill.name}: ${skill.level}`}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={shouldReduceMotion ? { width: `${levelToWidth(skill.level)}%` } : { width: 0 }}
                  whileInView={{ width: `${levelToWidth(skill.level)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
