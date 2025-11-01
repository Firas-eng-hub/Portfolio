import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark mode theme
 * Persists theme preference to localStorage
 * Prevents flash of unstyled content on page load
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, fallback to system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'dark'; // Default to dark for cosmic theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
};

export default useTheme;
