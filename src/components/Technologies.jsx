import { useState } from "react";
import { motion } from "framer-motion";
import { technologyGroups } from "../data";
import { Icon, Reveal, SectionLabel } from "./ui";

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

const views = [
  { id: "apps", label: "Apps", section: "02 / Stack Móvil" },
  { id: "backend", label: "Backend", section: "02 / Stack Backend" },
];

const DARK_LOGOS = new Set(["jsonwebtokens", "apachekafka", "lago"]);
const DIM_LOGOS = new Set(["sqlite", "keycloak", "sentry", "jira"]);

function logoClass(logo) {
  const slug = logo.split("/").pop().replace(/\.svg$/, "");
  const size = slug === "lago" ? "h-4 w-auto" : "h-7 w-7";

  if (DARK_LOGOS.has(slug)) return `${size} logo-invert`;
  if (DIM_LOGOS.has(slug)) return `${size} logo-brighten`;
  return size;
}

function TechCard({ technology }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface-container/75 p-space-lg shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-hairline-strong hover:bg-surface-container-high">
      <div className="mb-space-md flex items-center justify-between gap-2">
        {technology.logo ? (
          <img
            src={technology.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={`object-contain ${logoClass(technology.logo)}`}
          />
        ) : (
          <Icon
            name={technology.icon}
            className={`text-[28px] ${toneIcon[technology.tone]}`}
          />
        )}
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
    </div>
  );
}

export default function Technologies() {
  const [view, setView] = useState("apps");
  const groups = technologyGroups[view];
  const activeView = views.find((item) => item.id === view) ?? views[0];

  return (
    <section id="tecnologias" className="relative w-full py-space-xl lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <SectionLabel className="text-secondary">
              {activeView.section}
            </SectionLabel>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
              Tecnologías y Herramientas
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Área del stack técnico"
            className="inline-flex self-start rounded-full border border-hairline bg-surface-container/80 p-1 backdrop-blur-md md:self-auto"
          >
            {views.map((tab) => {
              const selected = view === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="stack-groups"
                  onClick={() => setView(tab.id)}
                  className={`relative rounded-full px-space-lg py-space-xs font-label-lg text-label-lg transition-colors duration-300 ${
                    selected
                      ? "text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="stack-tab"
                      className="absolute inset-0 rounded-full bg-primary-container shadow-lg shadow-primary-container/25"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id="stack-groups"
          key={view}
          role="tabpanel"
          className="space-y-space-xl"
        >
          {groups.map((group) => (
            <div key={group.id}>
              <div className="mb-space-md flex items-center gap-space-sm">
                <Icon
                  name={group.icon}
                  className={`text-[20px] ${toneIcon[group.tone]}`}
                />
                <h3 className="font-label-lg text-label-lg uppercase tracking-[0.18em] text-on-surface-variant">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
                <span className="font-label-sm text-label-sm text-on-surface-variant/70">
                  {group.items.length}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((technology) => (
                  <Reveal key={technology.name} className="h-full">
                    <TechCard technology={technology} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
