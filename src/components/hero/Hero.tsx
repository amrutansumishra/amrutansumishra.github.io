import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { AnimatedRole } from "./AnimatedRole";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden px-6 pb-10 pt-28 sm:pt-32 lg:pt-35"
    >
      {/* ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "var(--hero-glow)" }}
      />

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={shouldReduceMotion ? undefined : item}>
            <AvailabilityBadge />
          </motion.div>

          <motion.div variants={shouldReduceMotion ? undefined : item}>
            <p className="text-lg text-muted">Hi, I'm</p>
            <h1 className="mt-1 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-[64px]">
              Amrutansu Mishra
            </h1>
          </motion.div>

          <motion.h2
            variants={shouldReduceMotion ? undefined : item}
            className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
          >
            I build exceptional
            <br />
            <AnimatedRole />
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="max-w-[480px] text-base leading-relaxed text-muted"
          >
            Frontend React Developer with 2+ years of experience building
            scalable, user-centric web applications with modern technologies
            and best practices.
          </motion.p>

          <motion.div variants={shouldReduceMotion ? undefined : item}>
            <HeroActions />
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="mt-4 w-full border-t border-border pt-6"
          >
            <HeroStats />
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
