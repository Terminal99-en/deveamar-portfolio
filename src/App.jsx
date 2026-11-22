import { useEffect, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const THEME_KEY = "deveamar-theme";

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary-container via-secondary to-tertiary"
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Almacenamiento bloqueado: el tema sigue funcionando en esta sesión.
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#10131c" : "#f7f6fc");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((value) => (value === "dark" ? "light" : "dark"));
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface text-on-surface">
        <ScrollProgress />
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="w-full bg-surface pt-16">
          <Hero />
          <Projects />
          <Technologies />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
