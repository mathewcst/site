/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "m-purple": "#501068",
        "m-purple-dark": "#450c57",
        "m-teal": "#7bffc9",
        "m-blue": "#5a7eef",
      },
    },
  },
  plugins: [],
};
