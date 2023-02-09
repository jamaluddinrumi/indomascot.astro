import fs from "fs";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
const env = loadEnv("", "", "");

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: "info",
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
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
  },
  output: "static",
  site: "https://astro.indomascot.com",
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {},
      apiOptions: {
        region: "eu",
      },
    }),
    tailwind(),
    compress(),
    sitemap(),
    robotsTxt(),
    vue({ appEntrypoint: "/src/pages/_app" }),
  ],
});
