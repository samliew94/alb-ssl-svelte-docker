/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px',
    }
  },
  plugins: [],
}

