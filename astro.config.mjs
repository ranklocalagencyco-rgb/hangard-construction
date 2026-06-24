// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hangard-construction.vercel.app',
  integrations: [sitemap()],
  // Dev-only toolbar injects a non-descriptive "Learn more" link Lighthouse flags.
  // It never ships to production; disabled so dev-server audits are accurate too.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()]
  }
});
