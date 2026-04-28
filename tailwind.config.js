/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#dbeafe',
        background: '#f8fafc',
        foreground: '#0f172a',
        primary: '#2563eb'
      }
    }
  },
  plugins: []
}
