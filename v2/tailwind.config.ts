import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      textShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08)', // Default shadow
        lg: '0 6px 8px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)', // Larger shadow
        glow: '0 4px 10px rgba(132, 155, 188, 0.7)', // Glowing effect (color #849bbc)
      },
    },
  },
  plugins: [
    // Add the text-shadow plugin
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;
