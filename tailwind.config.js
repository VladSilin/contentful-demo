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
    { pattern: /cols-\d/ },
    { pattern: /rows-\d/ },
    { pattern: /col-span-\d/ },
    { pattern: /row-span-\d/ },
  ],
};
