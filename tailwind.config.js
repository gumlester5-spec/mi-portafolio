/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Agregamos esta línea para que escanee tu carpeta de componentes
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in-custom': 'fadeInUpCustom 1s ease-out forwards',
        'fade-out-custom': 'fadeOutCustom 1s ease-out forwards',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUpCustom: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutCustom: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-15rem * 7))' }, // Ajustado para Tailwind
        }
      },
    },
  },
  plugins: [],
}
