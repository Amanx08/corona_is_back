/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
    theme: {
    extend: {
      
      textColor:{
        primary:{
          font:'var(--primary-font-color)',
          muted:'var(--secondary-font-color)',  
          para:'var(--tertiary-font-color)',
          para2:'var(--quaternary-font-color)'
        }
      },


      background:{
       color :{
        primary:'var(--primary-bg-color)',

        }
      }

    },
  },
  plugins: [],
}

