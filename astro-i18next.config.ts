import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "id",
  locales: ["id", "en"],
  i18nextServer: {
    debug: true,
  },
  routes: {
    en: {
      "badut-maskot": "portfolio",
      "cara-pemesanan": "how-to-order",
      "tentang-kami": "about-us",
      "syarat-ketentuan": "terms-and-conditions",
      pencarian: "search",
    },
  },
};

export default config;
