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
        primary: "#1DB954",
        secondary: "#191414",
        accent: "#00D4FF",
        dark: "#121212",
        darker: "#0A0A0A",
        glass: "rgba(255, 255, 255, 0.1)"
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wave': 'wave 1.5s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #1DB954, 0 0 10px #1DB954, 0 0 15px #1DB954' },
          '100%': { boxShadow: '0 0 10px #1DB954, 0 0 20px #1DB954, 0 0 30px #1DB954' }
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1.5)' }
        }
      }
    },
  },
  plugins: [],
}

