// TODO: Replace with your actual employment history.

export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "role-1",
    period: "2025 — Present",
    role: "Frontend Developer",
    company: "Publicis Groupe", // TODO: replace with real company
    description:
      "Building scalable React applications and leading frontend development.",
    technologies: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "role-2",
    period: "2022 — 2025",
    role: "Junior Developer",
    company: "Tata Consultancy Services Limited", // TODO: replace with real company
    description:
      "Developed responsive web applications and collaborated with cross-functional teams.",
    technologies: ["React", "JavaScript", "CSS"],
  }
];

// TODO: Replace with your real, verifiable numbers.
export const experienceStats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Core Technologies", value: "4+" },
  { label: "GitHub Contributions", value: "100+" },
];
