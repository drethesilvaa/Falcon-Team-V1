import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            gray: {"900": "#0D1B2A"},
            neutral: {"700": "#424242"},
         },
         fontSize: {
            xs: ["12px", {lineHeight: "2.17em"}],
            sm: ["14px", {lineHeight: "1.57em"}],
            md: ["16px", {}],
            base: ["18px", {lineHeight: "1.44em"}],
            lg: ["20px", {}],
            xl: ["24px", {}],
            "3xl": ["32px", {}],
            "4xl": ["40px", {}],
            "5xl": ["48px", {}],
            "6xl": ["80px", {}],
         },
         boxShadow: {
            sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            md: "0px 12px 24px rgba(27.49, 58.65, 119.13, 0.05)",
            lg: "0 2px 4px rgb(7, 4, 146, 0.1), 0 24px 60px rgb(6, 47, 125, 0.05), 0 12px 24px rgb(27, 59, 119, 0.05)",
         },
         fontFamily: {
            "source-sans-pro": ["var(--font-source-sans-pro)", ...fontFamily.sans],
            ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans],
            inter: ["var(--font-inter)", ...fontFamily.sans],
            roboto: ["var(--font-roboto)", ...fontFamily.sans],
         },
         backgroundImage: {
            main: "radial-gradient(92.51% 49.99% at 3.88% 50.01%, #E8F9FD 0%, #E0E1DD 100%)",
         },
         container: {
            center: true,
            padding: {
               DEFAULT: "24px",
               sm: "32px",
               lg: "48PX",
               "2xl": "64px",
            },
         },
         screens: {
            xs: "420px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1728px",
         },
      },
   },
   plugins: [],
};
export default config;
