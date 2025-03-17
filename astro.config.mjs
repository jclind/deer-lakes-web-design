// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://deerlakeswebdesigns.netlify.app/',
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})
