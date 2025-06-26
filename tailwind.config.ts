import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2E4D0A",
          200: "#4B7E15",
          300: "#88E426",
        },
        secondary:{
          black:"#000000",
          white:"#FFFFFF",
        },
        typography:{
          white:"#FFFFFF",
          black:"#000000",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        malgun: ["Malgun Gothic", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
