/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: 
  [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'crimson': '#c10206',
      'midnight': '#1f2937',
      'hovergray': '#BFBFBD',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

