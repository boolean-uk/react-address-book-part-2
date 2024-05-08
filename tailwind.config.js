/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/components/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'outrun-blue': '#10439F',
        'outrun-pink': '#F27BBD',
        'outrun-violet': '#874CCC',
        'outrun-lilac': '#C65BCF'
      }
    },
  },
  plugins: [],
}

