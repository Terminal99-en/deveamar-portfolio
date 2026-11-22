import { motion, useReducedMotion } from "framer-motion";
import { contactLinks } from "../data";
import { Icon, Reveal, SectionLabel } from "./ui";

const toneCircle = {
  primary: "bg-primary-container/25 text-primary",
  secondary: "bg-secondary-container/25 text-secondary",
  tertiary: "bg-tertiary-container/25 text-tertiary",
};

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden py-space-xl lg:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-primary-container/15 blur-3xl"
        animate={
          reduced ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="flex max-w-3xl flex-col gap-space-lg">
          <div>
            <SectionLabel>04 / Colaboración</SectionLabel>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
              ¿Construimos algo juntos?
            </h2>
            <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
              Estoy abierto a nuevas oportunidades laborales, proyectos
              freelance de aplicaciones móviles o colaboraciones en productos
              digitales.
            </p>
          </div>

          <div className="flex flex-col gap-space-md">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-space-md rounded-lg border border-hairline bg-surface-container/80 p-space-md shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-hairline-strong hover:bg-surface-container-high hover:shadow-lg"
              >
                <div className="flex min-w-0 items-center gap-space-md">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${toneCircle[link.tone]}`}
                  >
                    {link.icon === "whatsapp" ? (
                      <WhatsAppIcon className="h-5 w-5" />
                    ) : (
                      <Icon name={link.icon} className="text-[20px]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      {link.label}
                    </div>
                    <div className="truncate font-title-md text-title-md text-on-surface">
                      {link.value}
                    </div>
                  </div>
                </div>
                <Icon
                  name={link.external ? "open_in_new" : "arrow_forward"}
                  className="shrink-0 text-on-surface-variant transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
