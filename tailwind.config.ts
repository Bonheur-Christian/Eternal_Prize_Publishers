import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      xs:"300",
      sm:"640px", 
      md:"768px", 
      lg: "1024px", 
      xl:"1280px",
      "2xl":"1536px" 

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },

      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2s infinite ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
