import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://mathewcosta.com",
  integrations: [tailwind(), sitemap(), icon()],
  output: "hybrid",
  adapter: vercel(),
});
