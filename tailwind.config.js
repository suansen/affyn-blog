const defaultTheme = require("tailwindcss/defaultTheme")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        logo: ["1.5rem", { lineHeight: "1.625rem", fontWeight: "700" }],
        nav: ["5rem", { letterSpacing: "2.7px" }],
        h1: ["6.25rem"],
        "h1-m": ["3.25rem"],
        h2: ["3rem"],
        "h2-m": ["1.75rem"],
        "card-header": ["2rem", { lineHeight: "2.125rem" }],
        "featured-header": ["4rem"],
        "featured-header-m": ["2.85rem"],
        "nav-button": ["1.1rem", { lineHeight: "8.75rem" }],
        "nav-item": ["5rem", { lineHeight: "1.625rem" }],
        "nav-item-m": ["3.25rem", { lineHeight: "1.625rem" }],
        p: ["1.5rem", { lineHeight: "1.625rem" }],
        "p-m": ["1.125rem", { lineHeight: "1.25rem" }],
        "p-sub": ["1.125rem", { lineHeight: "1.625rem" }],
        "p-sub-m": ["0.75rem", { lineHeight: "1" }],
        header: ["5rem", { lineHeight: "5.375rem" }],
        "header-m": ["2rem", { lineHeight: "2.125rem" }],
        subheader: [
          "2rem",
          { lineHeight: "5.375rem", letterSpacing: "0.4rem" }
        ],
        "subheader-m": [
          "1rem",
          { lineHeight: "5.375rem", letterSpacing: "0.3rem" }
        ],
        "faq-item": ["2.375rem", { lineHeight: "4" }],
        "faq-item-m": ["1.5rem", { lineHeight: "3" }]
      },
      colors: {
        primary: "#243c5a",
        "tw-background": "#1d1d1d",
        "tw-text": "#ffffff"
      },
      fontFamily: {
        sans: ["var(--poppins-font)", ...defaultTheme.fontFamily.sans],
        logo: ["var(--montserrat-alternates-font)", ...fontFamily.sans],
        para: ["var(--merriweather-font)", ...fontFamily.serif],
        advent: ["var(--advent-font)", ...fontFamily.serif]
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")]
}
