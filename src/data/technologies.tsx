import {
  Atom,
  Wind,
  Orbit,
  Hexagon,
  GitBranch,
  Container,
} from "lucide-react";
import type { ComponentType, CSSProperties } from "react";

type IconProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export type Technology = {
  name: string;
  /** Either a lucide icon component or a custom letter-badge component */
  icon: ComponentType<IconProps>;
  color: string;
};

function badge(label: string, color: string): ComponentType<IconProps> {
  return function Badge({ size = 18 }: IconProps) {
    return (
      <span
        className="flex items-center justify-center rounded-[6px] text-[10px] font-bold"
        style={{
          width: size,
          height: size,
          backgroundColor: `${color}1a`,
          color,
        }}
      >
        {label}
      </span>
    );
  };
}

export const technologies: Technology[] = [
  { name: "React", icon: Atom, color: "#61dafb" },
  { name: "TypeScript", icon: badge("TS", "#3178c6"), color: "#3178c6" },
  { name: "Next.js", icon: badge("N", "#a1a1aa"), color: "#e4e4e7" },
  { name: "Tailwind CSS", icon: Wind, color: "#38bdf8" },
  { name: "Redux Toolkit", icon: Orbit, color: "#764abc" },
  { name: "Node.js", icon: Hexagon, color: "#3fa037" },
  { name: "Git", icon: GitBranch, color: "#f05033" },
  { name: "Docker", icon: Container, color: "#2496ed" },
];
