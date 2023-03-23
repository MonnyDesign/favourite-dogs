/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  theme: {
    extend: {
      /**
       * Override container widths
       */
      container: {
      },
                /**
      * Extend colors
      */
      colors: {
        green: {
          '500': '#0DF191'
        },
        blue: {
          '900': '#132433',
        }
      },
      /**
       * Extending font sizes
      */
      fontSize: {
        'xs': '1.1rem', 
        'sm': '1.4rem',  
        'tiny': '1.7rem', 
        'base': '2rem', 
        'lg': '2.7rem', 
        'xl': '2.8rem',
        '2xl': '3.1rem', 
        '3xl': '3.8rem', 
        '4xl': '4.9rem',
        '5xl': '5.6rem',
        '9xl': '9.5rem'
      },
    },
  },
  plugins: [],
}
