import type { App } from "vue";
import { createI18n } from "vue-i18n";
import id from "../locales/id-ID";
import en from "../locales/en-US";

const i18n = createI18n({
  locale: "id",
  fallbackLocale: "en",
  legacy: true,
  messages: {
    id: id,
    en: en,
  },
});

export default (app: App) => {
  app.use(i18n);
};
