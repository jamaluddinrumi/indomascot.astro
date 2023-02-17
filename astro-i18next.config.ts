import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "id",
  locales: ["id", "en"],
  i18nextServer: {
    debug: true,
  },
};

export default config;
