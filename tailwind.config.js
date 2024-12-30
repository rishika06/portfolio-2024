/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "var(--dark-green)",
        "darkest-green": "var(--darkest-green)",
        "pale-olive": "var(--pale-olive)",
        beige: "var(--beige)",
        ivory: "var(--ivory)",
        "dark-slate-green": "var(--dark-slate-green)",
        "golden-bronze": "var(--golden-bronze)",
        "steel-blue-Gray": "var(--steel-blue-Gray)",
      },
    },
  },
  plugins: [],
};
