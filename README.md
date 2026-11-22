# Deveamar — Landing React

Landing personal construida con React + Vite + Tailwind CSS v4 y Framer Motion,
respetando la estructura y el sistema de diseño de `code.html` / `DESIGN.md`.
Incluye tema oscuro y claro con conmutador persistente.

## Scripts

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Control de versiones

El proyecto está bajo Git desde el commit inicial (`main`). `node_modules`,
`dist` y los archivos locales (`.env*`) quedan excluidos por `.gitignore`.

Remoto privado: <https://github.com/Terminal99-en/deveamar-portfolio>

```bash
git status
git add .
git commit -m "Describe el cambio"
git push
```

## Estructura

```
src/
  App.jsx                 # composición de la página, tema y barra de progreso
  data.js                 # proyectos, capturas, stack, idiomas y contacto
  fonts.css               # @font-face self-hosted (Outfit, DM Sans, iconos)
  index.css               # tokens de ambos temas, tipografía y animaciones
  components/
    Header.jsx            # navegación fija, tema y menú móvil
    Hero.jsx              # hero, métricas animadas y CTA
    HeroCollage.jsx       # collage de 8 columnas inclinado 25°
    Projects.jsx          # portafolio Apps/Web con tarjetas y tilt 3D
    Technologies.jsx      # stack con barras de progreso animadas
    Languages.jsx         # anillos SVG animados
    Contact.jsx           # enlaces directos, WhatsApp y email prellenados
    Footer.jsx
    ui.jsx                # Icon, Reveal, SectionLabel y easing compartido
public/
  images/apps/            # capturas locales extraídas de code.html
  fonts/                  # woff2 de Outfit, DM Sans y subset de iconos
```

Las capturas y las tipografías se sirven localmente, sin depender de Google,
para que la landing funcione también sin conexión.

## Detalles de animación

- El collage del hero repite las capturas de las apps en ocho columnas con
  órdenes distintos, desplazamiento vertical infinito y direcciones alternas,
  sobre un plano rotado 25° hacia la derecha. Se pausa con
  `prefers-reduced-motion`.
- Apariciones con `whileInView`, stagger en el hero, contadores y anillos SVG.
- El portafolio alterna entre Apps y Web con un switch animado; la vista Web
  incluye proyectos backend con rol y estado.
- Tilt 3D sutil y resplandor que sigue al cursor en las tarjetas de proyecto.
- Navegación con píldora animada (`layoutId`) y seguimiento de sección activa.
- El tema se guarda en `localStorage` (`deveamar-theme`) y se aplica antes del
  primer pintado para evitar destellos. El tema oscuro es el valor por defecto.
- Todos los movimientos respetan la preferencia de movimiento reducido.
