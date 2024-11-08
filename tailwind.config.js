/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"], // Set Lato as the default sans font
      },
      colors: {
        cyan: {
          50: "#00FFFF",
        },
      },
    },
  },
  plugins: [],
};
