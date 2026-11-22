import { useRef, useState } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { mobileProjects, webProjects } from "../data";
import { EASE, Icon, Reveal, SectionLabel } from "./ui";

const tagTone = {
  primary: "bg-primary-container/30 text-primary",
  secondary: "bg-secondary-container/30 text-secondary",
  tertiary: "bg-tertiary-container/30 text-tertiary",
  neutral: "bg-surface-container-highest text-on-surface-variant",
};

function ProjectCard({ project, index }) {
  const reduced = useReducedMotion();
  const cardRef = useRef(null);
  const rotateX = useSpring(0, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18 });

  function handlePointerMove(event) {
    if (reduced || event.pointerType === "touch") return;

    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(relativeX * 6);
    rotateX.set(relativeY * -6);
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const featured = Boolean(project.featured);
  const images = project.images ?? [];

  return (
    <Reveal
      delay={index * 0.07}
      className={`h-full ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <motion.article
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        whileHover={reduced ? undefined : { y: -6 }}
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, transformPerspective: 1200 }
        }
        transition={{ duration: 0.35, ease: EASE }}
        className="group relative flex h-full flex-col justify-between gap-space-md overflow-hidden rounded-lg border border-hairline bg-surface-container/80 p-space-lg shadow-xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 hover:border-primary-container/40"
      >
        <span
          aria-hidden="true"
          className="card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div
          className={
            featured
              ? "flex flex-col gap-space-lg sm:flex-row sm:items-start"
              : "flex items-start gap-space-md"
          }
        >
          <div
            className={
              featured ? "flex shrink-0 gap-space-sm" : "shrink-0"
            }
          >
            {images.length > 1 ? (
              <div
                className={`flex shrink-0 items-center ${
                  featured ? "-space-x-10" : "-space-x-8"
                }`}
              >
                {images.map((image, imageIndex) => {
                  const offset = imageIndex - (images.length - 1) / 2;

                  return (
                    <div
                      key={image.src}
                      style={{
                        "--fan-rotate": `${Math.max(-9, Math.min(9, offset * 12))}deg`,
                        "--fan-spread": `${Math.max(-18, Math.min(18, offset * 18))}px`,
                      }}
                      className="relative overflow-hidden rounded-[0.75rem] border border-hairline bg-surface-container-lowest shadow-lg shadow-black/30 rotate-[var(--fan-rotate)] transition-transform duration-500 ease-out group-hover:translate-x-[var(--fan-spread)] group-hover:rotate-0 motion-reduce:transition-none"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={288}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className={`aspect-[9/16] object-cover ${
                          featured ? "w-24 sm:w-28" : "w-20"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            ) : images.length === 1 ? (
              <div className="overflow-hidden rounded-[0.75rem] bg-surface-container-lowest shadow-md">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  width={288}
                  height={512}
                  loading="lazy"
                  decoding="async"
                  className={`aspect-[9/16] object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                    featured ? "w-32" : "w-28"
                  }`}
                />
              </div>
            ) : (
              <div className="grid aspect-[9/16] w-28 shrink-0 place-items-center overflow-hidden rounded-[0.75rem] border border-hairline bg-gradient-to-br from-primary-container/30 via-secondary-container/20 to-tertiary-container/25 shadow-md">
                <Icon name={project.icon} className="text-[32px] text-primary" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-headline-sm text-headline-sm text-on-surface">
              {project.title}
            </h3>
            {(project.role || project.status) && (
              <div className="mt-space-xs flex flex-wrap items-center gap-space-xs">
                {project.role && (
                  <span className="rounded-full bg-surface-container-highest px-space-sm py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                    {project.role}
                  </span>
                )}
                {project.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary-container/25 px-space-sm py-0.5 font-label-sm text-label-sm text-tertiary">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                    Estado: {project.status}
                  </span>
                )}
              </div>
            )}
            <p
              className={`mt-space-xs text-on-surface-variant ${
                featured
                  ? "font-body-md text-body-md"
                  : "line-clamp-4 font-body-sm text-body-sm"
              }`}
            >
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-space-xs pt-space-xs">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-space-sm py-space-xs font-label-sm text-label-sm ${
                tagTone[tag.tone] ?? tagTone.neutral
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  const [view, setView] = useState("apps");
  const list = view === "apps" ? mobileProjects : webProjects;

  return (
    <section
      id="proyectos"
      className="relative w-full bg-surface-container-low/50 py-space-xl lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <SectionLabel>
              {view === "apps"
                ? "01 / Portafolio Móvil"
                : "01 / Portafolio Web"}
            </SectionLabel>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
              Proyectos Destacados
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Tipo de portafolio"
            className="inline-flex self-start rounded-full border border-hairline bg-surface-container/80 p-1 backdrop-blur-md md:self-auto"
          >
            {[
              { id: "apps", label: "Apps" },
              { id: "web", label: "Web" },
            ].map((tab) => {
              const selected = view === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="portfolio-grid"
                  onClick={() => setView(tab.id)}
                  className={`relative rounded-full px-space-lg py-space-xs font-label-lg text-label-lg transition-colors duration-300 ${
                    selected
                      ? "text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="portfolio-tab"
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
          id="portfolio-grid"
          key={view}
          role="tabpanel"
          className={`grid grid-cols-1 gap-space-lg md:grid-cols-2 ${
            view === "apps" ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {list.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
