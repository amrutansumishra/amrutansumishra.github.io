// Levels are qualitative (no invented percentages).
// "value" is only used internally to size the indicator bar.
export type SkillLevel = "Learning" | "Comfortable" | "Experienced" | "Advanced";

const levelValue: Record<SkillLevel, number> = {
  Learning: 30,
  Comfortable: 55,
  Experienced: 75,
  Advanced: 92,
};

export type Skill = {
  name: string;
  level: SkillLevel;
};

export const skills: Skill[] = [
  { name: "Frontend Development", level: "Advanced" },
  { name: "React Ecosystem", level: "Advanced" },
  { name: "TypeScript", level: "Experienced" },
  { name: "UI / UX Implementation", level: "Experienced" },
  { name: "Performance Optimization", level: "Comfortable" },
  { name: "Accessibility (a11y)", level: "Comfortable" },
];

export function levelToWidth(level: SkillLevel) {
  return levelValue[level];
}
