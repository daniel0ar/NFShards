/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'muted': 'rgb(148 163 184)',
      },
      gridTemplateRows: {
        "process": "10vh 60vh 10vh",
      },
      backgroundImage: {
        'hero-pattern': "url(/patacon-bg.png)"
      }
    },
  },
  plugins: [],
}
