/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'support': 'url(https://devolutions.mo.cloudinary.net/web/common/images/background/support.jpg)'
      },
      gridTemplateColumns: {
        'layout': '328px minmax(0px, auto) 328px'
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}
