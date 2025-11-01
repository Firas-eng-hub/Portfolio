/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0e27',
          darker: '#1a1f3a',
          slate: '#1e293b',
          'slate-light': '#334155',
        },
        metallic: {
          gold: '#c9a961',
          bronze: '#b8860b',
          silver: '#c0c0c0',
        },
        iridescent: {
          purple: '#7c3aed',
          blue: '#3b82f6',
          indigo: '#6366f1',
        },
        text: {
          light: '#f1f5f9',
          muted: '#94a3b8',
          accent: '#cbd5e1',
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        'metallic-gradient': 'linear-gradient(135deg, #c9a961 0%, #b8860b 100%)',
        'glass': 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(201, 169, 97, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(201, 169, 97, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
