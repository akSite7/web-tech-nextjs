import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px;',
    },
    fontFamily: {
      raleway: 'var(--font-raleway)',
      playfair: 'var(--font-playfair)',
      roboto: 'var(--font-roboto)',
    },
    backgroundImage: {
      hero: 'url(/assets/img/hero/background.png)',
      numbertwo: 'url(/assets/img/quality/two.svg)',
      numberthree: 'url(/assets/img/room/three.svg)',
      view: 'url(/assets/img/view/background.png)',
    },
    extend: {
      colors: {
        accent: '#D4C17F',
        background: '#242B33',
        footer: '#2D343C',
        gray: '#BEBEBE',
      }
    },
  },
  plugins: [],
};
export default config;
