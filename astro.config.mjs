import { defineConfig } from 'astro/config';
import { defaultLocale } from './src/i18n/ui';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: defaultLocale,
    locales: ["de", "en", "fr"],
    fallback: {
      fr: "en",
      de: "en"
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx()
  ]
});