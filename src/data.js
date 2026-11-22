// Contenido del portafolio. Las capturas provienen de code.html.

export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

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
      { label: "Lago", tone: "neutral" },
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
      title: "Lenguajes y Frameworks",
      icon: "code",
      tone: "primary",
      items: [
        {
          name: "Flutter 3.x",
          logo: asset("/icons/tech/flutter.svg"),
          icon: "smartphone",
          tone: "primary",
          description:
            "Apps Android e iOS con widgets propios, theming y animaciones fluidas.",
        },
        {
          name: "Dart y POO",
          logo: asset("/icons/tech/dart.svg"),
          icon: "javascript",
          tone: "secondary",
          description:
            "Tipado fuerte, asincronía con Future/Stream y programación orientada a objetos.",
        },
        {
          name: "Desarrollo Móvil",
          icon: "deployed_code",
          tone: "tertiary",
          description:
            "Publicación en stores, gestos táctiles y rendimiento en dispositivos reales.",
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Estado y Arquitectura",
      icon: "hub",
      tone: "secondary",
      items: [
        {
          name: "Bloc y Cubit",
          icon: "hub",
          tone: "primary",
          description:
            "Eventos, estados y flujos predecibles con testeo de cada transición.",
        },
        {
          name: "Provider",
          icon: "code_blocks",
          tone: "primary",
          description:
            "Gestión de estado ligera con ChangeNotifier e inyección de dependencias.",
        },
        {
          name: "Clean Architecture y DDD",
          icon: "code_blocks",
          tone: "secondary",
          description:
            "Capas de dominio, datos y presentación con límites explícitos.",
        },
      ],
    },
    {
      id: "ui",
      title: "UI y Diseño",
      icon: "design_services",
      tone: "tertiary",
      items: [
        {
          name: "Figma → Flutter",
          logo: asset("/icons/tech/figma.svg"),
          icon: "design_services",
          tone: "tertiary",
          description:
            "Implementación de alta fidelidad: spacing, tipografía y tokens del diseño.",
        },
        {
          name: "Layouts responsivos y theming",
          logo: asset("/icons/tech/css.svg"),
          icon: "css",
          tone: "primary",
          description:
            "Adaptación a tamaños, modo claro/oscuro y sistema de design tokens.",
        },
        {
          name: "Widgets avanzados",
          icon: "code_blocks",
          tone: "secondary",
          description:
            "Slivers, composición, animaciones implícitas y accesibilidad.",
        },
      ],
    },
    {
      id: "datos",
      title: "Datos y Red",
      icon: "open_in_new",
      tone: "primary",
      items: [
        {
          name: "APIs REST / JSON",
          logo: asset("/icons/tech/openapiinitiative.svg"),
          icon: "open_in_new",
          tone: "primary",
          description:
            "Consumo de servicios, serialización y manejo de errores con reintentos.",
        },
        {
          name: "Autenticación JWT",
          logo: asset("/icons/tech/jsonwebtokens.svg"),
          icon: "person",
          tone: "secondary",
          description:
            "Sesiones, refresh tokens y almacenamiento seguro de credenciales.",
        },
        {
          name: "SharedPreferences y caché",
          logo: asset("/icons/tech/android.svg"),
          icon: "receipt_long",
          tone: "tertiary",
          description:
            "Persistencia local, caché offline y sincronización al recuperar red.",
        },
        {
          name: "Supabase",
          logo: asset("/icons/tech/supabase.svg"),
          icon: "diamond",
          tone: "primary",
          description:
            "Auth, base de datos Postgres y storage como backend gestionado.",
        },
      ],
    },
    {
      id: "calidad",
      title: "Calidad y Entrega",
      icon: "check_circle",
      tone: "secondary",
      items: [
        {
          name: "Pruebas unit, widget y navegación",
          logo: asset("/icons/tech/testinglibrary.svg"),
          icon: "check_circle",
          tone: "secondary",
          description:
            "Cobertura de lógica, widgets y flujos de navegación críticos.",
        },
        {
          name: "GitLab",
          logo: asset("/icons/tech/gitlab.svg"),
          icon: "deployed_code",
          tone: "primary",
          description:
            "Ramas, merge requests y code reviews con historial limpio.",
        },
        {
          name: "CI/CD en GitLab",
          logo: asset("/icons/tech/gitlab.svg"),
          icon: "send",
          tone: "tertiary",
          description:
            "Pipelines de build, test y despliegue automatizado.",
        },
        {
          name: "Azure DevOps",
          logo: asset("/icons/tech/azuredevops.svg"),
          icon: "deployed_code",
          tone: "primary",
          description:
            "Pipelines YAML, repositorios y tableros de trabajo integrados.",
        },
        {
          name: "Jira y Scrum",
          logo: asset("/icons/tech/jira.svg"),
          icon: "work",
          tone: "secondary",
          description:
            "Sprints, tableros Kanban y seguimiento de tareas del equipo.",
        },
      ],
    },
    {
      id: "extras",
      title: "Observabilidad y Extras",
      icon: "send",
      tone: "tertiary",
      items: [
        {
          name: "Logging y monitoreo",
          logo: asset("/icons/tech/sentry.svg"),
          icon: "send",
          tone: "primary",
          description:
            "Sentry, Firebase Crashlytics y trazas para detectar fallos en producción.",
        },
        {
          name: "Kafka y eventos",
          logo: asset("/icons/tech/apachekafka.svg"),
          icon: "hub",
          tone: "tertiary",
          description:
            "Arquitecturas orientadas a eventos y mensajería asíncrona.",
        },
      ],
    },
  ],
  backend: [
    {
      id: "lenguajes",
      title: "Lenguajes y Frameworks",
      icon: "code_blocks",
      tone: "primary",
      items: [
        {
          name: ".NET 10 / C#",
          logo: asset("/icons/tech/dotnet.svg"),
          icon: "code_blocks",
          tone: "primary",
          description:
            "APIs REST, EF Core Code-First y servicios empresariales.",
        },
        {
          name: "SignalR",
          logo: asset("/icons/tech/dotnet.svg"),
          icon: "hub",
          tone: "tertiary",
          description:
            "Comunicación en tiempo real sobre WebSockets para paneles y apps.",
        },
        {
          name: "API REST",
          logo: asset("/icons/tech/openapiinitiative.svg"),
          icon: "open_in_new",
          tone: "primary",
          description:
            "Diseño de contratos, versionado, validación y documentación.",
        },
      ],
    },
    {
      id: "datos",
      title: "Datos y Caché",
      icon: "receipt_long",
      tone: "secondary",
      items: [
        {
          name: "PostgreSQL",
          logo: asset("/icons/tech/postgresql.svg"),
          icon: "receipt_long",
          tone: "secondary",
          description:
            "Modelado relacional, migraciones, índices y consultas eficientes.",
        },
        {
          name: "Oracle",
          logo: asset("/icons/tech/oracle.svg"),
          icon: "receipt_long",
          tone: "tertiary",
          description:
            "Esquemas relacionales, consultas y migraciones en entornos empresariales.",
        },
        {
          name: "Redis",
          logo: asset("/icons/tech/redis.svg"),
          icon: "diamond",
          tone: "primary",
          description:
            "Caché, sesiones y estructuras en memoria de baja latencia.",
        },
        {
          name: "SQLite",
          logo: asset("/icons/tech/sqlite.svg"),
          icon: "smartphone",
          tone: "tertiary",
          description: "Persistencia embebida y apps offline-first.",
        },
        {
          name: "Supabase",
          logo: asset("/icons/tech/supabase.svg"),
          icon: "deployed_code",
          tone: "secondary",
          description:
            "Postgres gestionado, auth y storage con APIs listas.",
        },
      ],
    },
    {
      id: "seguridad",
      title: "Seguridad e Infraestructura",
      icon: "person",
      tone: "tertiary",
      items: [
        {
          name: "Keycloak",
          logo: asset("/icons/tech/keycloak.svg"),
          icon: "person",
          tone: "primary",
          description: "Identity provider: realms, roles y OAuth2/OIDC.",
        },
        {
          name: "APISIX",
          icon: "hub",
          tone: "secondary",
          description:
            "API gateway: rutas, plugins, rate limiting y observabilidad.",
        },
        {
          name: "Lago",
          logo: asset("/icons/tech/lago.svg"),
          icon: "receipt_long",
          tone: "tertiary",
          description:
            "Integración de facturación y cobros sobre el core del producto.",
        },
        {
          name: "GitLab CI/CD",
          logo: asset("/icons/tech/gitlab.svg"),
          icon: "deployed_code",
          tone: "primary",
          description:
            "Pipelines, entornos y despliegues automatizados.",
        },
      ],
    },
    {
      id: "arquitectura",
      title: "Arquitectura y Observabilidad",
      icon: "hub",
      tone: "primary",
      items: [
        {
          name: "Clean Architecture y DDD",
          icon: "code_blocks",
          tone: "secondary",
          description:
            "Capas, agregados y límites de dominio en servicios .NET.",
        },
        {
          name: "Kafka y eventos",
          logo: asset("/icons/tech/apachekafka.svg"),
          icon: "hub",
          tone: "tertiary",
          description:
            "Productores, consumidores y consistencia eventual.",
        },
        {
          name: "Logging y monitoreo",
          logo: asset("/icons/tech/sentry.svg"),
          icon: "send",
          tone: "primary",
          description:
            "Sentry, Firebase y métricas de salud de servicios.",
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
