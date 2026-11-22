// Contenido del portafolio. Las capturas provienen de code.html.

const screens = [
  { id: "storyteller-home", app: "Storyteller", alt: "Storyteller — pantalla principal", src: "/images/apps/storyteller-home.jpg" },
  { id: "storyteller-categories", app: "Storyteller", alt: "Storyteller — categorías", src: "/images/apps/storyteller-categories.jpg" },
  { id: "spinel-tools", app: "Spinel", alt: "Spinel — herramientas", src: "/images/apps/spinel-tools.jpg" },
  { id: "spinel-notes", app: "Spinel", alt: "Spinel — notas e invitados", src: "/images/apps/spinel-notes.jpg" },
  { id: "tankr-map", app: "Tankr", alt: "Tankr — mapa", src: "/images/apps/tankr-map.jpg" },
  { id: "tankr-calendar", app: "Tankr", alt: "Tankr — calendario", src: "/images/apps/tankr-calendar.jpg" },
  { id: "invox-control", app: "Invox", alt: "Invox — control de facturación", src: "/images/apps/invox-control.jpg" },
  { id: "atrium-panel", app: "Atrium", alt: "Atrium — panel gestor", src: "/images/apps/atrium-panel.jpg" },
];

const covers = {
  storyteller: "/images/apps/storyteller-cover.jpg",
  spinel: "/images/apps/spinel-notes.jpg",
  tankr: "/images/apps/tankr-cover.jpg",
  invox: "/images/apps/invox-cover.jpg",
  atrium: "/images/apps/atrium-cover.jpg",
};

export { screens };

export const mobileProjects = [
  {
    id: "storyteller",
    title: "Storyteller",
    description:
      "Plataforma interactiva de lectura y narrativas digitales con modo nocturno adaptativo, marcadores inteligentes y animaciones de transición fluidas.",
    icon: "auto_stories",
    tone: "primary",
    images: [{ src: covers.storyteller, alt: "Storyteller App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "spinel",
    title: "Spinel",
    description:
      "Aplicación de productividad y gestión visual de hábitos diarios con métricas en tiempo real, recordatorios inteligentes y sincronización en la nube.",
    icon: "diamond",
    tone: "secondary",
    images: [{ src: covers.spinel, alt: "Spinel App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "tankr",
    title: "Tankr",
    description:
      "Herramienta móvil para control de consumo, historial de repostajes y cálculo de eficiencia de vehículos con gráficos comparativos claros.",
    icon: "local_gas_station",
    tone: "tertiary",
    images: [{ src: covers.tankr, alt: "Tankr App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "invox",
    title: "Invox",
    description:
      "Gestor ágil de facturación y presupuestos para freelancers, con generación instantánea de PDF, seguimiento de pagos y panel de ingresos.",
    icon: "receipt_long",
    tone: "primary",
    images: [{ src: covers.invox, alt: "Invox App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "atrium",
    title: "Atrium",
    description:
      "Ecosistema digital para comunidades y espacios de trabajo colaborativos. Centraliza eventos, reservas de salas, mensajería interna y directorio de miembros en una interfaz oscura de alto contraste.",
    icon: "hub",
    tone: "secondary",
    featured: true,
    images: [{ src: covers.atrium, alt: "Atrium App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
];

export const webProjects = [
  {
    id: "aisp-datys",
    title: "AISP DATYS",
    role: "Backend",
    status: "Testing",
    description:
      "Plataforma de gestión de consumo de servicios y facturación para la empresa de desarrollo de software DATYS.",
    icon: "deployed_code",
    tone: "secondary",
    tags: [
      { label: ".NET 10", tone: "primary" },
      { label: "APISIX", tone: "neutral" },
      { label: "REDIS", tone: "tertiary" },
      { label: "Postgre", tone: "neutral" },
      { label: "Lagos", tone: "neutral" },
      { label: "Keycloak", tone: "neutral" },
    ],
  },
];

export const technologies = [
  {
    name: "React",
    icon: "code_blocks",
    tone: "primary",
    level: "Avanzado",
    description: "SPAs, hooks personalizados y arquitectura de componentes.",
    value: 90,
    gradient: "from-primary-container to-secondary-container",
  },
  {
    name: "JavaScript (ES6+)",
    icon: "javascript",
    tone: "secondary",
    level: "Avanzado",
    description: "Asincronía, APIs REST, manipulación del DOM y módulos.",
    value: 92,
    gradient: "from-secondary-container to-primary-container",
  },
  {
    name: "HTML5",
    icon: "html",
    tone: "tertiary",
    level: "Experto",
    description: "Estructura semántica, accesibilidad (WCAG) y SEO técnico.",
    value: 95,
    gradient: "from-tertiary-container to-primary-container",
  },
  {
    name: "CSS3",
    icon: "css",
    tone: "primary",
    level: "Experto",
    description: "Grid, Flexbox, animaciones fluidas y Tailwind CSS.",
    value: 95,
    gradient: "from-primary-container to-tertiary-container",
  },
  {
    name: "Desarrollo Móvil",
    icon: "smartphone",
    tone: "secondary",
    level: "Avanzado",
    description: "Apps híbridas y nativas, gestos táctiles y despliegue en stores.",
    value: 88,
    gradient: "from-secondary-container to-primary-container",
  },
  {
    name: "Git & GitHub Pages",
    icon: "deployed_code",
    tone: "primary",
    level: "Avanzado",
    description: "Control de versiones, flujos CI/CD y despliegue estático.",
    value: 90,
    gradient: "from-primary-container to-secondary-container",
  },
  {
    name: "Diseño UI/UX",
    icon: "design_services",
    tone: "tertiary",
    level: "Avanzado",
    description:
      "Sistemas de diseño, prototipado interactivo, glassmorphism y micro-interacciones centradas en el usuario.",
    value: 90,
    gradient: "from-tertiary-container via-primary-container to-secondary-container",
    wide: true,
  },
];

export const languages = [
  {
    name: "Español",
    badge: "Nativo",
    label: "100%",
    percent: 100,
    tone: "primary",
    description:
      "Comunicación fluida en entornos técnicos, documentación de producto y presentaciones con clientes.",
  },
  {
    name: "Inglés",
    badge: "Técnico",
    label: "B2/C1",
    percent: 82,
    tone: "secondary",
    description:
      "Lectura fluida de documentación oficial, code reviews, redacción técnica y reuniones internacionales.",
  },
];

export const contactMessage =
  "¡Hola Deveamar, me gustaría que trabajáramos en un proyecto. Ponte en contacto y agendaremos una cita!";

const emailSubject = "Colaboración en un proyecto";

const phoneRaw = "5354485670";

export const contact = {
  phone: "+53 54485670",
  phoneRaw,
  tel: `tel:+${phoneRaw}`,
  email: "developer.eamar@gmail.com",
  whatsapp: `https://wa.me/${phoneRaw}?text=${encodeURIComponent(contactMessage)}`,
  mailto: `mailto:developer.eamar@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(contactMessage)}`,
};

export const contactLinks = [
  {
    label: "Email",
    value: contact.email,
    href: contact.mailto,
    icon: "mail",
    tone: "primary",
  },
  {
    label: "Teléfono",
    value: contact.phone,
    href: contact.tel,
    icon: "call",
    tone: "secondary",
  },
  {
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
    icon: "whatsapp",
    tone: "tertiary",
    external: true,
  },
];

export const metrics = [
  { value: 5, suffix: "+", label: "Apps Publicadas", tone: "text-on-surface" },
  { value: 4.8, decimals: 1, suffix: "★", label: "Valoración Media", tone: "text-primary" },
  { value: 3, suffix: "+", label: "Años Exp.", tone: "text-secondary" },
];
