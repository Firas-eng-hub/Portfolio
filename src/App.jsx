import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';
import useTheme from './hooks/useTheme';
import useReducedMotion from './hooks/useReducedMotion';

/**
 * Main App Component
 * Cosmic-themed portfolio for Mohamed Firas Berriri
 * Built with React, Vite, Framer Motion, and Tailwind CSS
 */
function App() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  // Apply theme class to root on mount
  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-cosmic-dark text-text-light overflow-x-hidden">
        {/* Cosmic Background Layer */}
        {!prefersReducedMotion && <CosmicBackground />}

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Accessibility: Skip to main content link */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   focus:z-50 focus:px-4 focus:py-2 focus:bg-metallic-gold focus:text-cosmic-dark 
                   focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
      </div>
    </AnimatePresence>
  );
}

export default App;
