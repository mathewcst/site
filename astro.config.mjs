import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://mathewcosta.com',
  integrations: [tailwind(), svelte(), sitemap()],
  output: 'hybrid',
  adapter: vercel(),
})
