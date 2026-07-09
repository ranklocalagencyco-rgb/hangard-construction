// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hg-construction.co.uk',
  integrations: [sitemap()],
  build: {
    // The single shared stylesheet blocked first render and, because the
    // @font-face rules live inside it, delayed font discovery until it parsed.
    // Inlining trades cross-page caching for a shorter critical path.
    inlineStylesheets: 'always',
  },
  // Dev-only toolbar injects a non-descriptive "Learn more" link Lighthouse flags.
  // It never ships to production; disabled so dev-server audits are accurate too.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()]
  }
});
