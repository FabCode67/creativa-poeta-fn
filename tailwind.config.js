/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      md: "768px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      // Add a custom breakpoint for landscape smartphones (height roughly half of the screen)
      landscape: { raw: "(min-height: 360px) and (orientation: landscape)" },
    },
    extend: {},
  },
  plugins: [],
};
