import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        "primary-color": "#FFCC00",
        "secondary-text-color": "#8B8B8D",
        "bg-color": "#EFEFF4",
      },
    },
  },
  plugins: [],
};
export default config;
