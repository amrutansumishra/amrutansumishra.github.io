import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const roles = ["React Applications", "Scalable Web Apps", "Modern Interfaces"];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={shouldReduceMotion ? "static" : roles[index]}
          initial={shouldReduceMotion ? undefined : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          {shouldReduceMotion ? roles[0] : roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
