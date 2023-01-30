import fs from "fs";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import AstroPWA from "@vite-pwa/astro";
const env = loadEnv("", "", "");

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: 'info',
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
  site: "https://www.indomascot.com",
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
    AstroPWA({
      mode: "development",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      registerType: "autoUpdate",
      manifest: {
        name: "Admin INDOMASCOT",
        short_name: "Admin INDOMASCOT",
        description: "Admin INDOMASCOT",
        theme_color: "#121212",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallback: "/404",
      },
    }),
  ],
});
