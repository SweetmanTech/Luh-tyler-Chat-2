import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_medium: ["Inter Medium", "sans-serif"],
        inter_bold: ["Inter Bold", "sans-serif"],
        inter: ["Inter Regular", "sans-serif"],
        plus_jakarta_sans_bold: ["PlusJakartaSans Bold", "sans-serif"],
        plus_jakarta_sans: ["PlusJakartaSans Regular", "sans-serif"]
      },
      colors: {
        background: {
          DEFAULT: "#F5F5F5",
          dark: "#F1F1F1"
        },
        black: {
          DEFAULT: "#000000",
          light: "#444444"
        },
        while: {
          DEFAULT: "#ffffff"
        },
        grey: {
          DEFAULT: "#E6E6E6",
          dark: "#71717A",
          primary: "#C6C6C6",
          secondary: "#F8F8F8",
          light: "#E0E0E0"
        },
        green: {
          DEFAULT: "#345A5D"
        },
        purple: {
          DEFAULT: "#BD99B3",
          dark: "#720762"
        }
      },
      boxShadow: {
        grey: "1px 1px 1px 1px #E6E6E6",
        "grey-light": "1px 3px 8px 1px #E6E6E6"
      },
    },
  },
  plugins: [],
};
export default config;
