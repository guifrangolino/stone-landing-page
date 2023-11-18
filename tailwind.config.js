/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-hover-color": "var(--primary-hover-color)",
        "background-color": "var(--background-color)",
        "background2-color": "var(--background2-color)",
        "background3-color": "var(--background3-color)",
        "background4-color": "var(--background4-color)",
        "span-color": "var(--span-color)",
        "border-color": "var(--border-color)",
        "color-dark-gray": "var(--color-dark-gray)",
        "color-gray": "var(--color-gray)",
        "btn-border-color": "var(--btn-border-color)",
        "btn-hover-background-color": "var(--btn-hover-background-color)",
        "btn-secondary-hover-background-color":
          "var(--btn-secondary-hover-background-color)",
        "menu-mobile-background": "var(--menu-mobile-background)",
      },
      boxShadow: {
        menuItem:
          "inset 0 1px 0 #e6ecf2, inset 1px 0 0 #e6ecf2, inset -1px 0 0 #e6ecf2, inset 0 -1px 0 #fff",
        menuDrop:
          "0 16px 16px rgba(103,116,129,.15), inset 0 -1px 0 #e6ecf2, inset 1px 0 0 #e6ecf2, inset -1px 0 0 #e6ecf2;",
        btn: "0 0 4px 2px rgba(66,236,154,.5)",
      },
      fontFamily: {
        "sharon-display": ["Sharon Display", "ui-sans-serif", "system-ui"],
      },
      screens: {
        "2sm": "478px",
      },
    },
  },
  plugins: [],
};
