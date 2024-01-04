import { defineConfig } from 'astro/config';
import { defaultLocale } from './src/i18n/ui';
import tailwind from "@astrojs/tailwind";

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
  integrations: [tailwind()]
});