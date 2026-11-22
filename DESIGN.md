---
name: Obsidian Pulse
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#363943'
  surface-container-lowest: '#0b0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#272a34'
  surface-container-highest: '#32343f'
  on-surface: '#e0e2ef'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#e0e2ef'
  inverse-on-surface: '#2d303a'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d2bbff'
  primary: '#d2bbff'
  on-primary: '#3f008e'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#732ee4'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb0cd'
  on-tertiary: '#640039'
  tertiary-container: '#bf2076'
  on-tertiary-container: '#ffdde7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#10131c'
  on-background: '#e0e2ef'
  surface-variant: '#32343f'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

Este sistema de diseño está concebido para el portafolio y currículum de un desarrollador de aplicaciones móviles que busca proyectar precisión técnica, sensibilidad estética contemporánea y dominio del diseño de producto digital. La audiencia principal incluye reclutadores técnicos, líderes de ingeniería, fundadores de startups y clientes potenciales que evalúan tanto la calidad del código como el criterio visual.

La experiencia debe evocar sofisticación tecnológica, fluidez y vanguardia móvil: una atmósfera inmersiva en modo oscuro donde los proyectos y métricas profesionales destacan con claridad sobre superficies translúcidas.

El estilo visual combina **Glassmorphism** sutil con **Minimalismo oscuro de alto contraste**:
- **Capas translúcidas y desenfoque:** Tarjetas y contenedores flotantes con fondos semitransparentes, desenfoque de fondo (`backdrop-filter`) y bordes luminosos de muy baja opacidad que sugieren profundidad sin saturar la vista.
- **Acentos vibrantes:** Gradientes en púrpura, azul eléctrico y magenta reservados exclusivamente para llamadas a la acción principales, estados activos, indicadores de progreso y realces de proyectos destacados.
- **Claridad geométrica:** Tipografía sans-serif limpia y proporciones generosas que priorizan la lectura rápida de experiencia laboral, stack tecnológico y casos de estudio móviles.

## Colors

La paleta parte de un lienzo azul marino muy oscuro (`#0B0E17` y `#111625`) que reduce la fatiga visual y maximiza el contraste de los elementos interactivos y las capturas de aplicaciones móviles.

- **Primario (`#7C3AED`):** Púrpura vibrante utilizado en acciones principales, estados activos de navegación, etiquetas destacadas y como punto de partida de los gradientes de marca.
- **Secundario (`#3B82F6`):** Azul eléctrico empleado para enlaces, insignias de tecnologías, estados informativos y transiciones en gradientes junto al color primario.
- **Terciario (`#EC4899`):** Rosa/magenta reservado para acentos puntuales, indicadores de estado en vivo, microinteracciones y remates de gradientes tricolores.
- **Neutral (`#0B0E17`):** Base del sistema en modo oscuro. Las superficies elevadas escalan sutilmente hacia `#111625` y `#1A2238` con opacidad controlada para lograr el efecto glassmorphism.

**Reglas de aplicación:**
- **Texto principal:** Blanco puro (`#F8FAFC`) para títulos y métricas clave; gris azulado claro (`#94A3B8`) para descripciones y metadatos.
- **Gradientes:** Aplicar `linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #EC4899 100%)` únicamente en botones primarios, bordes activos o gráficos de habilidades, manteniendo el resto de la interfaz sobria.

## Typography

La jerarquía tipográfica combina **Outfit** para titulares, nombres de proyectos y cifras de impacto, con **DM Sans** para cuerpo de texto, descripciones técnicas y etiquetas de interfaz. Ambas familias comparten una construcción geométrica limpia que evoca el diseño de producto móvil contemporáneo.

- **Escala responsiva:** Los niveles superiores a `32px` (`display-lg` y `headline-lg`) cuentan con variantes específicas para móvil (`-mobile`) que aseguran una lectura cómoda sin desbordamientos en pantallas estrechas.
- **Uso de pesos:** Utilizar `600` y `700` en `Outfit` para anclar secciones del CV y métricas clave (descargas, años de experiencia, calificación en tiendas). Reservar `DM Sans` en peso `400` para párrafos de experiencia y `500`/`600` para etiquetas de stack tecnológico y botones.

## Layout & Spacing

El sistema emplea una **cuadrícula fluida de 12 columnas** con un ancho máximo de contenedor de `1200px` centrado en escritorio, lo que permite presentar casos de estudio móviles y líneas de tiempo del CV con aire y equilibrio.

- **Móvil (`< 768px`):** Cuadrícula de 4 columnas, márgenes laterales de `1.5rem` (`margin`) y separación entre columnas de `1rem`. Los bloques de proyectos y tarjetas de experiencia se apilan verticalmente en una sola columna.
- **Tableta (`768px – 1024px`):** Cuadrícula de 8 columnas con `gutter` de `1.5rem`. Las tarjetas de proyectos se organizan en pares (4 columnas cada una).
- **Escritorio (`> 1024px`):** Cuadrícula de 12 columnas con `gutter` de `1.5rem`. Permite composiciones asimétricas (por ejemplo, 5 columnas para descripción del proyecto y 7 columnas para mockups interactivos de dispositivos móviles).

El ritmo espacial interno sigue una escala progresiva (`space-xs` a `space-xl`) para mantener coherencia entre el padding de las tarjetas glassmorphism y la separación entre secciones del portafolio.

## Elevation & Depth

La profundidad visual se construye mediante **Glassmorphism** combinado con **capas tonales oscuras** y **bordes de bajo contraste**, evitando sombras pesadas que ensucien el fondo azul marino.

- **Nivel 0 (Lienzo base):** Fondo `#0B0E17` sin desenfoque, reservado para el cuerpo principal de la página.
- **Nivel 1 (Superficies y tarjetas):** Fondo `#111625` al `70%` de opacidad con `backdrop-filter: blur(16px)` y un borde sutil de `1px solid rgba(255, 255, 255, 0.08)`. Ideal para tarjetas de proyectos, bloques de experiencia laboral y contenedores de habilidades.
- **Nivel 2 (Elementos flotantes y modales):** Fondo `#1A2238` al `85%` de opacidad con `backdrop-filter: blur(24px)`, borde luminoso `1px solid rgba(124, 58, 237, 0.25)` y una sombra ambiental difusa tintada en púrpura (`0 20px 40px -15px rgba(124, 58, 237, 0.2)`).
- **Resplandor ambiental:** Se permite el uso de orbes difuminados en púrpura (`#7C3AED`) y azul eléctrico (`#3B82F6`) con opacidad muy baja (`10% - 15%`) detrás de las tarjetas principales para reforzar la translucidez del vidrio.

## Shapes

El lenguaje de formas adopta un nivel de redondez **Pill-shaped (`3`)**, reflejando la estética suave y táctil de las aplicaciones móviles modernas.

- **Botones y chips:** Completamente redondeados en forma de píldora (`1rem` a `9999px` según altura), facilitando la interacción táctil y reforzando el carácter móvil del portafolio.
- **Tarjetas y contenedores:** Esquinas generosas (`2rem` en `rounded-lg` para tarjetas de experiencia y `3rem` en `rounded-xl` para contenedores destacados o marcos de presentación de apps).
- **Elementos internos:** Avatares circulares y miniaturas de capturas de pantalla con radios suaves que armonizan con el marco exterior sin crear tensiones visuales.

## Components

Todos los componentes heredan las propiedades de glassmorphism, el redondeado tipo píldora y los acentos en gradiente del sistema:

- **Botones:**
  - *Primario:* Fondo con gradiente diagonal (`#7C3AED` a `#3B82F6`), texto blanco en `label-lg`, forma de píldora y un sutil resplandor en hover (`box-shadow: 0 0 20px rgba(124, 58, 237, 0.4)`).
  - *Secundario (Ghost/Glass):* Fondo translúcido `rgba(255, 255, 255, 0.05)`, borde `1px solid rgba(255, 255, 255, 0.12)` y desenfoque de fondo.
- **Chips (Etiquetas de Stack Tecnológico):**
  - Forma de píldora compacta (`space-xs` vertical, `space-sm` horizontal), tipografía `label-sm`, fondo `#111625` al `80%` y borde sutil. Los chips de tecnologías principales pueden incluir un punto indicador en `#EC4899` o `#3B82F6`.
- **Tarjetas de Proyecto y CV:**
  - Contenedores Nivel 1 con `padding` de `space-lg`, esquinas `rounded-lg` y transición suave en hover que intensifica ligeramente el borde hacia `#7C3AED` al `40%`.
- **Listas (Experiencia y Logros):**
  - Elementos separados por `space-md`, con indicadores verticales en gradiente o viñetas circulares luminosas que conectan cronológicamente los hitos profesionales.
- **Campos de entrada (Formulario de contacto):**
  - Fondo `#0B0E17` al `60%`, borde `1px solid rgba(255, 255, 255, 0.1)`, esquinas `1rem` y estado `:focus` con anillo luminoso en `#7C3AED`.
- **Checkboxes y Radio Buttons:**
  - Controles circulares o suavemente redondeados (`0.5rem`) con relleno en gradiente púrpura-azul cuando están activos.
- **Componentes específicos del portafolio:**
  - *Barra de navegación flotante:* Cápsula glassmorphism fija en la parte superior o inferior (estilo app móvil) con indicador activo en gradiente.
  - *Tarjetas de métricas:* Bloques compactos para destacar descargas, calificación en App Store/Play Store y años de experiencia con cifras en `Outfit` `700`.