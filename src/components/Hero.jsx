import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import HeroCollage from "./HeroCollage";
import { Icon, EASE } from "./ui";
import { metrics } from "../data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

function CountUp({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    const controls = animate(0, value, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [cvReady, setCvReady] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  function handleCvClick() {
    setCvReady(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCvReady(false), 2500);
  }

  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-surface"
    >
      <HeroCollage />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh_-_4rem)] max-w-7xl items-center px-6 py-space-xl lg:px-12 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col gap-space-lg"
        >
          <motion.h1
            variants={item}
            className="font-display-lg text-display-lg-mobile text-on-surface sm:text-display-lg"
          >
            Desarrollador de {" "}
            <span className="text-gradient-animated">Apps y Backend</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
          >
            Diseño y desarrollo aplicaciones móviles y backend .NET,
            combinando arquitectura limpia, interfaces fluidas y estética
            contemporánea orientada al producto.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-space-md pt-space-xs"
          >
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="group relative inline-flex items-center gap-space-sm overflow-hidden rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-space-xl py-space-md font-label-lg text-label-lg text-on-primary-container shadow-lg shadow-primary-container/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-container/40"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <Icon
                name="arrow_downward"
                className="relative z-10 text-[20px] transition-transform duration-300 group-hover:translate-y-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </motion.a>

            <motion.button
              type="button"
              onClick={handleCvClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="inline-flex items-center gap-space-sm rounded-full bg-surface-container-high/80 px-space-xl py-space-md font-label-lg text-label-lg text-on-surface shadow-md backdrop-blur-md transition-colors duration-300 hover:bg-surface-bright"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={cvReady ? "ready" : "idle"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-space-sm"
                >
                  <Icon
                    name={cvReady ? "check_circle" : "download"}
                    className="text-[20px] text-primary"
                  />
                  <span>{cvReady ? "CV Listo" : "Descargar CV"}</span>
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Métricas ocultas temporalmente: Apps publicadas, Valoración media y Años de experiencia.
          <motion.div
            variants={item}
            className="grid max-w-lg grid-cols-3 gap-space-md pt-space-md"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-outline-variant/30 bg-surface-container/80 p-space-sm shadow-sm backdrop-blur-md transition-colors duration-300 hover:border-primary/30 sm:p-space-md"
              >
                <div
                  className={`font-headline-md text-headline-sm sm:text-headline-md ${metric.tone}`}
                >
                  <CountUp
                    value={metric.value}
                    decimals={metric.decimals}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
