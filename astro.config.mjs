import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.indomascot.com",
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress(),
    sitemap(),
    robotsTxt(),
  ],
});
