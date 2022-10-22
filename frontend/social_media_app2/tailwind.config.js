/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: "#06080F",
        secondaryColor: "#1B2730",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "hover-bounce": "scale-110 duration-150 transition-all transform",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
