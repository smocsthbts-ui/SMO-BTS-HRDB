/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        siemens: {
          petrol: '#00646e',
          teal: '#00a3a6',
          'teal-light': '#24c9cc',
          'teal-dark': '#004f57',
          dark: '#121820',
          'dark-card': '#1b2430',
          'dark-surface': '#243242',
          'dark-border': '#334457',
          accent: '#eb780a',
          blue: '#0070ba',
          green: '#107c41',
          red: '#d13438',
          yellow: '#fce100',
        }
      }
    },
  },
  plugins: [],
};
