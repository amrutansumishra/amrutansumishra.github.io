import noteDark from "../assets/noteDark.png";
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with product filtering, cart, secure checkout, and authentication.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "#", // TODO: add live demo URL
    githubUrl: "https://github.com/amrutansumishra/ecommerce-admin-dashboard", // TODO: add GitHub URL
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    description:
      "Mobile app to track income, expenses, and budgets with analytics.",
    technologies: ["React Native", "Redux", "SQLite"],
    liveUrl: "#",
    githubUrl: "https://github.com/amrutansumishra/expense-app",
  },
  {
    id: "notepad-app",
    title: "Notepad App",
    description:
      "Minimal notepad app for writing and organizing notes with local storage.",
    technologies: ["React Native", "Expo", "AsyncStorage"],
    image: noteDark,
    liveUrl: "#",
    githubUrl: "https://github.com/amrutansumishra/tick-notes",
  },
  {
    id: "task-management",
    title: "Task Management",
    description:
      "Task management tool with deadlines, priorities, and progress tracking.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
