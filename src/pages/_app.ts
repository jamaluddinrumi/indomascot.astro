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

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHome,
  faMapMarker,
  faExternalLinkAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";

export default (app: App) => {
  app.use(i18n);

  /* add icons to the library */
  library.add(
    faHome,
    faMapMarker,
    faExternalLinkAlt,
    faEnvelope,
    faWhatsapp,
    faInstagram,
    faYoutube
  );

  /* add font awesome icon component */
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.component("font-awesome-layers", FontAwesomeLayers);
};