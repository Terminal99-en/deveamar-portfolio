import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { screens } from "../data";

// Cada columna recorre las capturas en un orden distinto para que no coincidan.
const ORDERS = [
  [0, 4, 1, 6, 2, 7, 3, 5],
  [3, 7, 0, 5, 1, 4, 6, 2],
  [5, 2, 7, 0, 4, 1, 3, 6],
  [1, 6, 3, 7, 0, 5, 2, 4],
  [7, 0, 5, 3, 6, 2, 4, 1],
  [2, 5, 6, 1, 3, 0, 7, 4],
  [4, 1, 6, 2, 7, 3, 5, 0],
  [6, 3, 2, 4, 5, 7, 0, 1],
];

const COLUMN_OFFSETS = [
  "0vh",
  "-9vh",
  "6vh",
  "-14vh",
  "3vh",
  "-6vh",
  "-11vh",
  "9vh",
];

function buildTrack(order) {
  const ordered = order.map((index) => screens[index]);
  // Se duplica la lista para que el desplazamiento vertical sea infinito y continuo.
  return [...ordered, ...ordered];
}

const tracks = ORDERS.map(buildTrack);

export default function HeroCollage() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 900], [0, -80]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { y: parallax }}
      >
        {/* Plano inclinado 25° hacia la derecha con las capturas repetidas */}
        <div className="absolute right-[-26%] top-1/2 h-[200vh] w-[140vw] -translate-y-1/2 rotate-[25deg]">
          <div className="flex h-full items-start justify-center gap-4 sm:gap-6">
            {tracks.map((track, columnIndex) => (
              <div
                key={columnIndex}
                style={{ transform: `translateY(${COLUMN_OFFSETS[columnIndex]})` }}
                className={`relative h-full w-[clamp(140px,20vw,250px)] shrink-0 ${
                  columnIndex > 5
                    ? "hidden lg:block"
                    : columnIndex > 1
                      ? "hidden sm:block"
                      : ""
                }`}
              >
                <div
                  className={`hero-collage-track ${
                    columnIndex % 2 === 0 ? "is-reverse" : ""
                  }`}
                  style={{ "--duration": `${58 + columnIndex * 9}s` }}
                >
                  {track.map((shot, imageIndex) => (
                    <figure
                      key={`${shot.id}-${imageIndex}`}
                      className="collage-item relative overflow-hidden rounded-[1.25rem] border border-hairline bg-surface-container-lowest shadow-2xl shadow-black/50"
                    >
                      <img
                        src={shot.src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="aspect-[9/16] w-full object-cover"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent" />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Máscara para garantizar la legibilidad del texto */}
      <div className="hero-veil absolute inset-0 z-10" />

      {/* Resplandores ambientales */}
      <motion.div
        className="absolute -left-24 -top-24 z-10 h-96 w-96 rounded-full bg-primary-container/20 blur-3xl"
        animate={
          reduced ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 z-10 h-[28rem] w-[28rem] rounded-full bg-secondary-container/15 blur-3xl"
        animate={
          reduced ? undefined : { opacity: [0.35, 0.7, 0.35], scale: [1.05, 1, 1.05] }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
