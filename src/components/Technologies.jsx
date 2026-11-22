import { motion } from "framer-motion";
import { technologies } from "../data";
import { EASE, Icon, Reveal, SectionLabel } from "./ui";

const toneIcon = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const toneBadge = {
  primary: "bg-primary-container/25 text-primary",
  secondary: "bg-secondary-container/25 text-secondary",
  tertiary: "bg-tertiary-container/25 text-tertiary",
};

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative w-full py-space-xl lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mb-space-xl">
          <SectionLabel className="text-secondary">02 / Stack Técnico</SectionLabel>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
            Tecnologías &amp; Herramientas
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <Reveal
              key={technology.name}
              delay={index * 0.05}
              className={technology.wide ? "sm:col-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-lg border border-hairline bg-surface-container/75 p-space-lg shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-hairline-strong hover:bg-surface-container-high">
                <div className="mb-space-md flex items-center justify-between gap-2">
                  <Icon
                    name={technology.icon}
                    className={`text-[28px] ${toneIcon[technology.tone]}`}
                  />
                  <span
                    className={`rounded-full px-space-sm py-space-xs font-label-sm text-label-sm ${
                      toneBadge[technology.tone]
                    }`}
                  >
                    {technology.level}
                  </span>
                </div>

                <h3 className="font-title-md text-title-md text-on-surface">
                  {technology.name}
                </h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  {technology.description}
                </p>

                <div className="mt-space-md h-1.5 w-full overflow-hidden rounded-full bg-surface-container-lowest">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${technology.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${technology.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.15 + index * 0.05,
                      ease: EASE,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
