import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        noto_naskh: ["var(--font-noto-naskh)"],
        noto_serif: ["var(--font-noto-serif)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              fontFamily: "noto_serif",
            },
            h3: {
              fontFamily: "noto_serif",
            },
            h2: {
              fontFamily: "noto_serif",
            },
            h4: {
              fontFamily: "noto_serif",
            },
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
};
export default config;
