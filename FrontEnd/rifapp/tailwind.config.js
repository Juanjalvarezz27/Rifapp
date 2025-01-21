/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#d8cab7', /* Bg Color */

          100: '#c2b995',
          150: '#cbada2',

          200: '#a78f79',
          250: '#947975',
          
          300: '#736558',
          350: '#62514c',

          400: '#47383a',
          450: '#3b2c26',
  
          500: '#25241a', 
          550: '#14100c',
        },
      },
      screens: { // Aquí se definen los breakpoints
        'xxs': '240px', 
        'xs': '480px', 
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px', 
      },
    },
  },
  plugins: []
}