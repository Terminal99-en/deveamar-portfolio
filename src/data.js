// Contenido del portafolio. Las capturas provienen de code.html.

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const screens = [
  { id: "storyteller-home", app: "Storyteller", alt: "Storyteller — pantalla principal", src: asset("/images/apps/storyteller-home.jpg") },
  { id: "storyteller-categories", app: "Storyteller", alt: "Storyteller — categorías", src: asset("/images/apps/storyteller-categories.jpg") },
  { id: "spinel-tools", app: "Spinel", alt: "Spinel — herramientas", src: asset("/images/apps/spinel-tools.jpg") },
  { id: "spinel-notes", app: "Spinel", alt: "Spinel — notas e invitados", src: asset("/images/apps/spinel-notes.jpg") },
  { id: "tankr-map", app: "Tankr", alt: "Tankr — mapa", src: asset("/images/apps/tankr-map.jpg") },
  { id: "tankr-calendar", app: "Tankr", alt: "Tankr — calendario", src: asset("/images/apps/tankr-calendar.jpg") },
  { id: "invox-control", app: "Invox", alt: "Invox — control de facturación", src: asset("/images/apps/invox-control.jpg") },
  { id: "atrium-panel", app: "Atrium", alt: "Atrium — panel gestor", src: asset("/images/apps/atrium-panel.jpg") },
];

const covers = {
  storyteller_home: asset("/images/apps/storyteller-categories.jpg"),
  storyteller_plans: asset("/images/apps/storyteller-cover.jpg"),
  spinel_home: asset("/images/apps/spinel-notes.jpg"),
  spinel_tools: asset("/images/apps/spinel-tools.jpg"),
  tankr_home: asset("/images/apps/tankr-calendar.jpg"),
  tankr_map: asset("/images/apps/tankr-cover.jpg"),
  invox: asset("/images/apps/invox-cover.jpg"),
  atrium: asset("/images/apps/atrium-cover.jpg"),
};

export { screens };

export const mobileProjects = [
  {
    id: "storyteller",
    title: "Storyteller",
    description:
      "Plataforma interactiva de lectura y narrativas digitales con marcadores inteligentes y animaciones de transición fluidas.",
    icon: "auto_stories",
    tone: "primary",
    images: [{ src: covers.storyteller_home, alt: "Storyteller App" }, { src: covers.storyteller_plans, alt: "Storyteller App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "spinel",
    title: "Spinel",
    description:
      "Aplicación de productividad y gestión visual de notas, tareas, y recordatorios. Herramientas integradas para facilitar el trabajo diario.",
    icon: "diamond",
    tone: "secondary",
    images: [{ src: covers.spinel_home, alt: "Spinel App" },{ src: covers.spinel_tools, alt: "Spinel App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "tankr",
    title: "Tankr",
    description:
      "Herramienta móvil para control de consumo de combustible, historial de repostajes y cálculo de eficiencia de vehículos con gráficos comparativos claros.",
    icon: "local_gas_station",
    tone: "tertiary",
    images: [{ src: covers.tankr_home, alt: "Tankr App" },{ src: covers.tankr_map, alt: "Tankr App" }],
    tags: [
      { label: "Flutter", tone: "primary" },
      { label: "Móvil", tone: "secondary" },
    ],
  },
  {
    id: "invox",
    title: "Invox",
    description:
      "Gestor ágil de inventario y activos fijos para freelancers, con generación instantánea de PDF, seguimiento de activos y panel de control.",
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
      { label: "REDIS", tone: "neutral" },
      { label: "Postgre", tone: "neutral" },
      { label: "Lagos", tone: "neutral" },
      { label: "Keycloak", tone: "neutral" },
    ],
  },
  {
    id: "connect-api",
    title: "ConnectAPI",
    role: "Backend",
    status: "Testing",
    description:
      "API REST en estado de testing que conecta el módulo hotelero Zunic con una pizarra IPBX con IA integrada.",
    icon: "hub",
    tone: "primary",
    tags: [
      { label: ".NET 10", tone: "primary" },
      { label: "Code-First", tone: "neutral" },
      { label: "Postgre", tone: "neutral" },
      { label: "API REST", tone: "neutral" },
    ],
  },
];

export const technologyGroups = {
  apps: [
    {
      id: "lenguajes",
      title: "Lenguajes & Frameworks",
      icon: "code",
      tone: "primary",
      items: [
        {
          name: "Flutter 3.x",
          icon: "smartphone",
          tone: "primary",
          level: "Avanzado",
          description:
            "Apps Android e iOS con widgets propios, theming y animaciones fluidas.",
          value: 92,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "Dart & POO",
          icon: "javascript",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Tipado fuerte, asincronía con Future/Stream y programación orientada a objetos.",
          value: 90,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Desarrollo Móvil",
          icon: "deployed_code",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Publicación en stores, gestos táctiles y rendimiento en dispositivos reales.",
          value: 88,
          gradient: "from-tertiary-container to-primary-container",
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Estado & Arquitectura",
      icon: "hub",
      tone: "secondary",
      items: [
        {
          name: "Bloc & Cubit",
          icon: "hub",
          tone: "primary",
          level: "Avanzado",
          description:
            "Eventos, estados y flujos predecibles con testeo de cada transición.",
          value: 90,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "Clean Architecture & DDD",
          icon: "code_blocks",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Capas de dominio, datos y presentación con límites explícitos.",
          value: 86,
          gradient: "from-secondary-container to-primary-container",
        },
      ],
    },
    {
      id: "ui",
      title: "UI & Diseño",
      icon: "design_services",
      tone: "tertiary",
      items: [
        {
          name: "Figma → Flutter",
          icon: "design_services",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Implementación de alta fidelidad: spacing, tipografía y tokens del diseño.",
          value: 92,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "Layouts responsivos & theming",
          icon: "css",
          tone: "primary",
          level: "Avanzado",
          description:
            "Adaptación a tamaños, modo claro/oscuro y sistema de design tokens.",
          value: 90,
          gradient: "from-primary-container to-tertiary-container",
        },
        {
          name: "Widgets avanzados",
          icon: "code_blocks",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Slivers, composición, animaciones implícitas y accesibilidad.",
          value: 88,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Soporte RTL",
          icon: "open_in_new",
          tone: "tertiary",
          level: "Intermedio",
          description:
            "Interfaces Right-to-Left para árabe y otros idiomas.",
          value: 74,
          gradient: "from-tertiary-container to-secondary-container",
        },
      ],
    },
    {
      id: "datos",
      title: "Datos & Red",
      icon: "open_in_new",
      tone: "primary",
      items: [
        {
          name: "APIs REST / JSON",
          icon: "open_in_new",
          tone: "primary",
          level: "Avanzado",
          description:
            "Consumo de servicios, serialización y manejo de errores con reintentos.",
          value: 90,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "Autenticación JWT",
          icon: "person",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Sesiones, refresh tokens y almacenamiento seguro de credenciales.",
          value: 88,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "SharedPreferences & caché",
          icon: "receipt_long",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Persistencia local, caché offline y sincronización al recuperar red.",
          value: 88,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "Supabase",
          icon: "diamond",
          tone: "primary",
          level: "Avanzado",
          description:
            "Auth, base de datos Postgres y storage como backend gestionado.",
          value: 84,
          gradient: "from-primary-container to-tertiary-container",
        },
      ],
    },
    {
      id: "calidad",
      title: "Calidad & Entrega",
      icon: "check_circle",
      tone: "secondary",
      items: [
        {
          name: "Pruebas unit, widget y navegación",
          icon: "check_circle",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Cobertura de lógica, widgets y flujos de navegación críticos.",
          value: 85,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "GitLab",
          icon: "deployed_code",
          tone: "primary",
          level: "Avanzado",
          description:
            "Ramas, merge requests y code reviews con historial limpio.",
          value: 88,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "CI/CD en GitLab",
          icon: "send",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Pipelines de build, test y despliegue automatizado.",
          value: 85,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "Jira & Scrum",
          icon: "work",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Sprints, tableros Kanban y seguimiento de tareas del equipo.",
          value: 88,
          gradient: "from-secondary-container to-tertiary-container",
        },
      ],
    },
    {
      id: "extras",
      title: "Observabilidad & Extras",
      icon: "send",
      tone: "tertiary",
      items: [
        {
          name: "Logging & monitoreo",
          icon: "send",
          tone: "primary",
          level: "Avanzado",
          description:
            "Sentry, Firebase Crashlytics y trazas para detectar fallos en producción.",
          value: 82,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "Java & Spring Boot",
          icon: "code",
          tone: "secondary",
          level: "Intermedio",
          description:
            "Lectura de backends, contratos REST y ecosistema JVM (deseable).",
          value: 70,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Kafka & eventos",
          icon: "hub",
          tone: "tertiary",
          level: "Intermedio",
          description:
            "Arquitecturas orientadas a eventos y mensajería asíncrona.",
          value: 72,
          gradient: "from-tertiary-container to-secondary-container",
        },
      ],
    },
  ],
  backend: [
    {
      id: "lenguajes",
      title: "Lenguajes & Frameworks",
      icon: "code_blocks",
      tone: "primary",
      items: [
        {
          name: ".NET 10 / C#",
          icon: "code_blocks",
          tone: "primary",
          level: "Avanzado",
          description:
            "APIs REST, EF Core Code-First y servicios empresariales.",
          value: 90,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "Java & Spring Boot",
          icon: "code",
          tone: "secondary",
          level: "Intermedio",
          description:
            "Servicios REST, inyección de dependencias y ecosistema JVM.",
          value: 72,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "SignalR",
          icon: "hub",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Comunicación en tiempo real sobre WebSockets para paneles y apps.",
          value: 86,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "API REST",
          icon: "open_in_new",
          tone: "primary",
          level: "Avanzado",
          description:
            "Diseño de contratos, versionado, validación y documentación.",
          value: 90,
          gradient: "from-primary-container to-tertiary-container",
        },
      ],
    },
    {
      id: "datos",
      title: "Datos & Caché",
      icon: "receipt_long",
      tone: "secondary",
      items: [
        {
          name: "PostgreSQL",
          icon: "receipt_long",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Modelado relacional, migraciones, índices y consultas eficientes.",
          value: 88,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Redis",
          icon: "diamond",
          tone: "primary",
          level: "Avanzado",
          description:
            "Caché, sesiones y estructuras en memoria de baja latencia.",
          value: 85,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "SQLite",
          icon: "smartphone",
          tone: "tertiary",
          level: "Avanzado",
          description: "Persistencia embebida y apps offline-first.",
          value: 88,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "Supabase",
          icon: "deployed_code",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Postgres gestionado, auth y storage con APIs listas.",
          value: 84,
          gradient: "from-secondary-container to-tertiary-container",
        },
      ],
    },
    {
      id: "seguridad",
      title: "Seguridad & Infra",
      icon: "person",
      tone: "tertiary",
      items: [
        {
          name: "Keycloak",
          icon: "person",
          tone: "primary",
          level: "Avanzado",
          description: "Identity provider: realms, roles y OAuth2/OIDC.",
          value: 86,
          gradient: "from-primary-container to-secondary-container",
        },
        {
          name: "APISIX",
          icon: "hub",
          tone: "secondary",
          level: "Avanzado",
          description:
            "API gateway: rutas, plugins, rate limiting y observabilidad.",
          value: 85,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Lagos",
          icon: "receipt_long",
          tone: "tertiary",
          level: "Avanzado",
          description:
            "Integración de facturación y cobros sobre el core del producto.",
          value: 82,
          gradient: "from-tertiary-container to-primary-container",
        },
        {
          name: "GitLab CI/CD",
          icon: "deployed_code",
          tone: "primary",
          level: "Avanzado",
          description:
            "Pipelines, entornos y despliegues automatizados.",
          value: 85,
          gradient: "from-primary-container to-tertiary-container",
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Arquitectura & Observabilidad",
      icon: "hub",
      tone: "primary",
      items: [
        {
          name: "Clean Architecture & DDD",
          icon: "code_blocks",
          tone: "secondary",
          level: "Avanzado",
          description:
            "Capas, agregados y límites de dominio en servicios .NET.",
          value: 86,
          gradient: "from-secondary-container to-primary-container",
        },
        {
          name: "Kafka & eventos",
          icon: "hub",
          tone: "tertiary",
          level: "Intermedio",
          description:
            "Productores, consumidores y consistencia eventual.",
          value: 72,
          gradient: "from-tertiary-container to-secondary-container",
        },
        {
          name: "Logging & monitoreo",
          icon: "send",
          tone: "primary",
          level: "Avanzado",
          description:
            "Sentry, Firebase y métricas de salud de servicios.",
          value: 82,
          gradient: "from-primary-container to-secondary-container",
        },
      ],
    },
  ],
};

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
    label: "B2",
    percent: 75,
    tone: "secondary",
    description:
      "Lectura y escritura fluida. Traducción simultánea",
  },
  {
    name: "Locución",
    badge: "Habilidad",
    label: "90%",
    percent: 90,
    tone: "tertiary",
    description:
      "Locución y presentación de contenido para videos, demos de producto y piezas de marca con dicción clara y ritmo natural.",
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
    tone: "whatsapp",
    external: true,
  },
];

export const metrics = [
  { value: 5, suffix: "+", label: "Apps Publicadas", tone: "text-on-surface" },
  { value: 4.8, decimals: 1, suffix: "★", label: "Valoración Media", tone: "text-primary" },
  { value: 3, suffix: "+", label: "Años Exp.", tone: "text-secondary" },
];
