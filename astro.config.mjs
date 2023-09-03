import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  experimental: {
    assets: true
  },
  integrations: [
    mdx(), 
    tailwind({
      // config: {
      //   applyBaseStyles: false
      // }
      applyBaseStyles: false,
    }), 
    react(),
  ]
});