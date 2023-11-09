/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "intro_background": "url('/backgrounds/intro-background.svg')",
        "about_background": "url('/backgrounds/about-background.svg')"
      },
      colors: {
        primary: "#FFCCE1",
        secondary: "#D2FBA4",
        background: "#FFE3EF",
        terciary: "#F8F8F8",
        text: "#FFACC0",
        "text-secondary": "#6893B8",
      },
      fontFamily: {
        Sensei: ["Sensei", "sans-serif"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
