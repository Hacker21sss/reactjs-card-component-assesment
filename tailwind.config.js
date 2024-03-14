/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'blue':'#2B62CF',
          'orange':'#E58158',
          'blue1':' #699BF7',
          'white-b':' #E9F3FE',
          'white':'#FAFAFA',
          'blue2':'#A4E8FD',
          'white-c':'#FFFFFF',
          'white-d':'#F3F3F3',
          'white-e':'#F4F4F4'
          
          
        }
      },
      fontFamily: {
        custom: ['Montserrat']
      },
    
    },
  },
  plugins: [],
}

