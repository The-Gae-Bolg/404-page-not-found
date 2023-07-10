/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'SpaceMono': ['Space Mono', 'ui-monospace', 'system-ui'],
      'Inconsolata': ['Inconsolata', 'ui-monospace', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}

