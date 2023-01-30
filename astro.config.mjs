import fs from "fs";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
const STORYBLOK_TOKEN = import.meta.env.STORYBLOK_TOKEN;

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      https: {
        key: fs.readFileSync("../127.0.0.1+7-key.pem"),
        cert: fs.readFileSync("../127.0.0.1+7.pem"),
      },
    },
  },
  output: "static",
  site: "https://www.indomascot.com",
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
    tailwind(),
    compress(),
    sitemap(),
    robotsTxt(),
    vue({ appEntrypoint: "/src/pages/_app" }),
  ],
});
