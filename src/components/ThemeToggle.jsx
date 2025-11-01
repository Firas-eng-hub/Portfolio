import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';

/**
 * ThemeToggle Component
 * Accessible dark mode toggle with smooth animation
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-cosmic-slate/50 backdrop-blur-sm 
                 hover:bg-cosmic-slate transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-metallic-gold/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-metallic-gold" />
        ) : (
          <Sun className="w-5 h-5 text-metallic-gold" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
