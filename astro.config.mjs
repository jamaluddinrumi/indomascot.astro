import fs from "fs";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import compressor from "astro-compressor";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/vite";
import { unheadVueComposablesImports } from "@unhead/vue";
import { loadEnv } from "vite";
import prefetch from "@astrojs/prefetch";
import astroI18next from "astro-i18next";
const env = loadEnv("", "", "");
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: "info",
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    server: {
      https:
        env.NODE_ENV === "development" && env.USE_LOCAL_HTTPS === "true"
          ? {
              key: fs.readFileSync("../127.0.0.1+7-key.pem"),
              cert: fs.readFileSync("../127.0.0.1+7.pem"),
            }
          : false,
    },
    preview: {
      https:
        env.NODE_ENV === "development" && env.USE_LOCAL_HTTPS === "true"
          ? {
              key: fs.readFileSync("../127.0.0.1+7-key.pem"),
              cert: fs.readFileSync("../127.0.0.1+7.pem"),
            }
          : false,
    },
    plugins: [
      AutoImport({
        imports: [unheadVueComposablesImports],
      }),
    ],
  },
  output: "static",
  site: "https://astro.indomascot.com/",
  trailingSlash: "ignore",
  integrations: [
    astroI18next(),
    vue({
      appEntrypoint: "/src/_app",
    }),
    storyblok({
      accessToken: env.PUBLIC_STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        // region: 'us', // optional,  or 'eu' (default)
      },
    }),
    tailwind(),
    sitemap(),
    robotsTxt(),
    critters(),
    compress(),
    compressor(),
  ],
});
