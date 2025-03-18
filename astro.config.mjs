import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://sqot0.my.id",

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: cloudflare(),
  
  integrations: [sitemap()]
});