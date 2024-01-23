/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
    },
    extend: {
      colors: {
        'dark-violet': '#2E1D5D',
        violet: '#3E277C',
        'light-violet': '#A8A6FF',
        pink: '#FFA6F6',
        'light-blue': '#A6FAFF',
      },
    },
  },
  plugins: [],
}
