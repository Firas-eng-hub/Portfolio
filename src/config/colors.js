/**
 * Cosmic color palette and theme configuration
 * Maintains dark, metallic, and iridescent aesthetic
 */

export const colors = {
  // Primary dark backgrounds
  cosmic: {
    dark: '#0a0e27',
    darker: '#1a1f3a',
    slate: '#1e293b',
    slateLight: '#334155',
  },
  
  // Metallic accents (gold, bronze, silver)
  metallic: {
    gold: '#c9a961',
    bronze: '#b8860b',
    silver: '#c0c0c0',
  },
  
  // Iridescent hover/accent colors (purple, blue)
  iridescent: {
    purple: '#7c3aed',
    blue: '#3b82f6',
    indigo: '#6366f1',
  },
  
  // Text colors
  text: {
    light: '#f1f5f9',
    muted: '#94a3b8',
    accent: '#cbd5e1',
  },
  
  // Glassmorphism
  glass: 'rgba(30, 41, 59, 0.7)',
  glassDark: 'rgba(30, 41, 59, 0.5)',
};

export const gradients = {
  cosmic: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
  metallic: 'linear-gradient(135deg, #c9a961 0%, #b8860b 100%)',
  glass: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%)',
  iridescent: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
};

export const animations = {
  float: 'float 6s ease-in-out infinite',
  pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  shimmer: 'shimmer 2s linear infinite',
  glow: 'glow 2s ease-in-out infinite',
  slideUp: 'slideUp 0.6s ease-out',
  slideDown: 'slideDown 0.6s ease-out',
  fadeIn: 'fadeIn 0.6s ease-out',
  scaleIn: 'scaleIn 0.6s ease-out',
};

export default { colors, gradients, animations };
