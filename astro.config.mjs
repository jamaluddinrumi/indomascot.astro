import fs from "fs";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/vite";
import { unheadVueComposablesImports } from "@unhead/vue";
import purgecss from "astro-purgecss";

import { loadEnv } from "vite";
const env = loadEnv("", "", "");

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
    tailwind(),
    compress(),
    sitemap(),
    robotsTxt(),
    vue({ appEntrypoint: "/src/pages/_app" }),
    purgecss(),
  ],
});
