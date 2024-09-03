import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        carlito: ['Carlito', 'sans-serif'],
      }
    }
  }
} satisfies Config;
