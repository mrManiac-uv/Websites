module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1560px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
