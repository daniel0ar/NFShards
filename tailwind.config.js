/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "muted": "rgb(148 163 184)",
        "primary": "#09090b",
        "secondary": "#18181b",
        "tertiary": "#27272a",
      },
      gridTemplateRows: {
        "process": "15vh 55vh 8vh",
      },
      backgroundImage: {
        'hero-pattern': "url(/patacon-bg.png)"
      }
    },
  },
  plugins: [],
}
