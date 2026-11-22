import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Icon({ name, className = "", ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined select-none ${className}`}
      {...rest}
    >
      {name}
    </span>
  );
}

export function Reveal({ children, delay = 0, y = 26, amount = 0.2, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, className = "text-primary" }) {
  return (
    <span
      className={`font-label-sm text-label-sm uppercase tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}
