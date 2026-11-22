import { motion } from "framer-motion";
import { languages } from "../data";
import { EASE, Reveal, SectionLabel } from "./ui";

const toneRing = {
  primary: "text-primary",
  secondary: "text-secondary",
};

const toneBadge = {
  primary: "bg-primary-container/30 text-primary",
  secondary: "bg-secondary-container/30 text-secondary",
};

export default function Languages() {
  return (
    <section
      id="idiomas"
      className="relative w-full bg-surface-container-low/50 py-space-xl lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mb-space-xl">
          <SectionLabel className="text-tertiary">03 / Comunicación</SectionLabel>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Idiomas
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {languages.map((language, index) => (
            <Reveal key={language.name} delay={index * 0.1}>
              <div className="flex items-center gap-space-lg rounded-lg border border-hairline bg-surface-container/80 p-space-lg shadow-xl shadow-black/20 backdrop-blur-xl sm:p-space-xl">
                <div className="relative h-20 w-20 shrink-0">
                  <svg
                    viewBox="0 0 80 80"
                    className={`h-20 w-20 -rotate-90 ${toneRing[language.tone]}`}
                    aria-hidden="true"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="opacity-15"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: language.percent / 100 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
                    />
                  </svg>
                  <span className="absolute inset-0 grid place-items-center font-title-md text-title-md text-on-surface">
                    {language.label}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {language.name}
                    </h3>
                    <span
                      className={`rounded-full px-space-sm py-space-xs font-label-sm text-label-sm ${
                        toneBadge[language.tone]
                      }`}
                    >
                      {language.badge}
                    </span>
                  </div>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {language.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
