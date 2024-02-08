/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#5dc6cb",
          100: "#49bfc5",
          150: "#35b8be",
          200: "#30a6ab",
          250: "#2a9398",
        },
      },
    },
  },
  plugins: [],
};
