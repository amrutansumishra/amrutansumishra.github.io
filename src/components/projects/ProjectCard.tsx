import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import type { Project } from "../../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springY, [-30, 30], [5, -5]);
  const rotateY = useTransform(springX, [-30, 30], [-5, 5]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
    >
      {/* glow ring on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* image / placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-surface-secondary to-surface">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // TODO: replace with a real screenshot at project.image
          <div className="flex h-full w-full items-center justify-center">
            <Folder
              size={40}
              className="text-primary/30 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-surface/60 px-2 py-1 text-[11px] font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-1 flex items-center gap-4 border-t border-border pt-3 text-sm">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
