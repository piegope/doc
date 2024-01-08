/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Open Sans Variable', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'support': 'url(https://devolutions.mo.cloudinary.net/web/common/images/background/support.jpg)'
      },
      colors: {
        'primary': '#0068c3'
      },
      gridTemplateColumns: {
        'layout': '328px minmax(0px, auto) 328px'
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem'
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('svg', '& svg')
    })
  ],
}
