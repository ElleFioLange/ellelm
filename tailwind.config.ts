import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // blocklist: ["invert"],
  theme: {
    extend: {
      colors: {
        fg: "rgb(var(--fg) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        // ===========================================
        accent: {
          fg: "rgb(var(--accent-fg) / <alpha-value>)",
          bg: "rgb(var(--accent-bg) / <alpha-value>)",
        },
        // ===========================================
        green: "rgb(var(--green) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
      },
      fontFamily: {
        cormorant: ["var(--cormorant)"],
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-in-quick": "fade-in 0.25s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "fade-out-quick": "fade-out 0.25s ease-in-out",
        "scroll-up": "scroll-up 1.5s cubic-bezier(.64,.28,.56,1.11)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "loading-bounce": {
          "0%, 60%, 100%": {
            transform: "translateY(0%)",
            "animation-timing-function": "cubic-bezier(1, -1, 0.65, 1)",
          },
          "40%": {
            transform: "translateY(-7%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        "scroll-up": {
          "0%": { marginTop: "100vh" },
          "50%": { marginTop: "100vh" },
          "100%": { marginTop: "12rem" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
