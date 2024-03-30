/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'beach':"url('./assets/Beach.jpg')",
        'roomsHero':"url('./assets/Rooms/room-2.jpeg')"
      }
    },
  },
  plugins: [],
}

