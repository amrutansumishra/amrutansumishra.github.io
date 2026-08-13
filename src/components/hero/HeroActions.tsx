import { ArrowUpRight, Mail, Download } from "lucide-react";
import resume from "../../assets/Amrutansu_Mishra_Resume.pdf";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => scrollTo("projects")}
        className="
          group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5
          text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]
          transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        "
      >
        View My Work
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <button
        type="button"
        onClick={() => scrollTo("contact")}
        className="
          inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-surface/60 px-5
          text-sm font-semibold text-foreground backdrop-blur-sm
          transition-all duration-300 hover:border-primary/40 hover:bg-primary/10
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        "
      >
        Hire Me
        <Mail size={15} className="text-primary" />
      </button>

      <a
        href={resume} // TODO: replace with your actual CV/resume file
        download
        className="
          inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-medium text-muted
          transition-colors duration-300 hover:text-foreground
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        "
      >
        Download CV
        <Download size={15} />
      </a>
    </div>
  );
}
