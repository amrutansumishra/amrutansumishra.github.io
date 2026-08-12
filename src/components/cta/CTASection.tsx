import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "../ui/Reveal";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CTASection() {
  return (
    <section id="contact" aria-label="Contact call to action" className="px-6 py-10 pb-20">
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/10 p-10 sm:p-14">
          {/* decorative orbital glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-3xl sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-primary/30 sm:block"
            style={{ transform: "rotate(-18deg)" }}
          />

          <div className="relative flex flex-col items-start gap-6 sm:max-w-[560px]">
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Let's build something <span className="text-primary">amazing</span> together
            </h2>
            <p className="text-base leading-relaxed text-muted">
              I'm always interested in new opportunities and exciting projects.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:amrutansumishra@gmail.com"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View My Work
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
