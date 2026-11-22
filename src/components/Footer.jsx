import { Icon } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-hairline bg-surface-container-low py-space-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-space-md px-6 text-on-surface-variant md:flex-row lg:px-12">
        <span className="font-body-sm text-body-sm">
          © {year} Deveamar. Todos los derechos reservados.
        </span>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-space-sm rounded-full border border-hairline-strong bg-surface-container/70 px-space-lg py-space-sm font-label-lg text-label-lg text-on-surface transition-colors duration-300 hover:bg-surface-container-high"
        >
          <Icon
            name="arrow_upward"
            className="text-[18px] transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span>Inicio</span>
        </a>
      </div>
    </footer>
  );
}
