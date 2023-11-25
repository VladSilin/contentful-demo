/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    { pattern: /cols-\d/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /rows-\d/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /col-span-\d/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /row-span-\d/, variants: ["sm", "md", "lg", "xl", "2xl"] },
  ],
};
