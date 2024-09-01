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
    },
    extend: {
      colors: {
        "primary-color": "#FFCC00",
        "bg-color": "#EFEFF4",
      },
    },
  },
  plugins: [],
};
export default config;
