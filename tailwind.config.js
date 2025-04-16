/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Hintergründe
    'bg-red-50', 'bg-orange-50', 'bg-yellow-50', 'bg-green-50', 'bg-blue-50', 
    'bg-purple-50', 'bg-teal-50', 'bg-amber-50', 'bg-indigo-50',
    // Text-Farben
    'text-red-600', 'text-orange-600', 'text-yellow-600', 'text-green-600', 'text-blue-600',
    'text-purple-600', 'text-teal-600', 'text-amber-600', 'text-indigo-600'
  ],
  plugins: [],
}