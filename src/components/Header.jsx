import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Icon } from "./ui";
import { asset } from "../data";

const AVATARS = {
  dark: asset("/images/brand/avatar-black.webp"),
  light: asset("/images/brand/avatar-white.webp"),
};

const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "idiomas", label: "Idiomas" },
];

const SECTION_IDS = [...NAV_LINKS.map((link) => link.id), "contacto"];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.4;
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = id;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "border-hairline bg-surface/85 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          : "border-transparent bg-surface/50"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5"
          aria-label="Deveamar — inicio"
        >
          <img
            src={theme === "light" ? AVATARS.light : AVATARS.dark}
            alt=""
            width={512}
            height={512}
            decoding="async"
            className="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-hairline transition-transform duration-500 group-hover:scale-105"
          />
          <span className="flex min-w-0 flex-col">
            <span className="font-headline-sm text-headline-sm leading-none tracking-tight text-on-surface">
              Deveamar
            </span>
            <span className="mt-1 truncate font-label-sm text-label-sm leading-none text-on-surface-variant">
              Ernesto Acosta Martínez
            </span>
          </span>
        </a>

        <div className="flex items-center gap-space-lg">
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Secciones del portafolio"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-space-md py-space-xs font-label-lg text-label-lg transition-colors duration-300 ${
                    isActive
                      ? "text-on-primary-container"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary-container shadow-lg shadow-primary-container/25"
                      transition={{ type: "spring", stiffness: 260, damping: 34, mass: 0.9 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href="#contacto"
            aria-current={active === "contacto" ? "page" : undefined}
            className="hidden rounded-full bg-primary-container px-space-lg py-space-sm font-label-lg text-label-lg text-on-primary-container transition-all duration-300 hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary-container/30 md:inline-flex"
          >
            Contacto
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Cambiar al tema claro" : "Cambiar al tema oscuro"
            }
            title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface-container/80 text-on-surface transition-colors duration-300 hover:bg-surface-container-high"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.22 }}
                className="grid place-items-center"
              >
                <Icon
                  name={theme === "dark" ? "light_mode" : "dark_mode"}
                  className="text-[20px]"
                />
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline-strong bg-surface-container/80 text-on-surface transition-colors duration-300 hover:bg-surface-container-high md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Menú móvil"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-4 top-[calc(100%_+_0.5rem)] origin-top rounded-lg border border-hairline-strong bg-surface-container/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {[...NAV_LINKS, { id: "contacto", label: "Contacto" }].map(
                (link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-full px-space-md py-space-sm font-label-lg text-label-lg transition-colors duration-200 ${
                      active === link.id
                        ? "bg-primary-container text-on-primary-container"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    }`}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
