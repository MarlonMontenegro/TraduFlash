/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"],
      },

      /* === ACETERNITY DOT BACKGROUNDS === */
      backgroundImage: {
        "dot-slate-300":
          "radial-gradient(circle, rgba(203,213,225,0.40) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-size": "22px 22px", // tamaño del patrón
      },
    },
  },
  plugins: [],
};
