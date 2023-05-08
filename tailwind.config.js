/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "agro-yellow": "#FFCC29",
        "agro-orange": "#F48924",
        "agro-green": "#4C6538",
        "agro-black": "#1A1A1A",
        "agro-gray": "#E9E7E7",
        "gray2": "#ABABAB",
        "gray3": "#F6F6F6",
        "agro-floral-white": "#FFFAEB",
      },
      backgroundImage: {
        quotation: "url('/images/quotation.png')",
        rec: "url('/images/rec.svg')",
      },
    },
  },
  plugins: [],
};
