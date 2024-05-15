/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#242424',
        'dark-background': '#141313',
        'primary-color': '#1F1F39',
        'secondary-color': '#6B7280',

      },
    },
  },
  plugins: [],
}