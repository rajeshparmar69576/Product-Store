/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3B82F6',
        'brand-green': '#10B981',
        'brand-purple': '#8B5CF6',
        'brand-pink': '#EC4899',
      },
    },
  },
  plugins: [],
}
