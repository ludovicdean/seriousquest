import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ludovic.dean.github.io',
  base: '/seriousquest',
  integrations: [tailwind()]
});
