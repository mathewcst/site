/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Mono", "monospace"],
      },
      colors: {
        "m-black": "#191d24",
        "m-purple": "#501068",
        "m-purple-dark": "#450c57",
        "m-purple-darker": "#360745",
        "m-teal": "#7bffc9",
        "m-blue": "#5a7eef",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
