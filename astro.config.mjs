// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },


  build: {
    inlineStylesheets: "auto",
  },

  server: {
    host: true,
    port: 4321,
  },
 output: 'static',
// @ts-ignore
adapter: vercelStatic(),
});