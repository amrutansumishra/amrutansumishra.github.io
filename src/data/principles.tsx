import { Code2, Gauge, Smartphone, ShieldCheck, type LucideIcon } from "lucide-react";

export type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const principles: Principle[] = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    icon: Code2,
  },
  {
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and SEO.",
    icon: Gauge,
  },
  {
    title: "Responsive Design",
    description: "Building interfaces that work beautifully across devices.",
    icon: Smartphone,
  },
  {
    title: "Best Practices",
    description: "Following modern frontend engineering and design practices.",
    icon: ShieldCheck,
  },
];
