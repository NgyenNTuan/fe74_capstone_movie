/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         spacing: {
            1: "1rem",
            2: "2rem",
         },
      },
   },
   plugins: [],
};
