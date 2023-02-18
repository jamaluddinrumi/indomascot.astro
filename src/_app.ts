import type { App } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { createHead } from "@unhead/vue";
import { createI18n } from "vue-i18n";
import id from "@locales/id-ID";
import en from "@locales/en-US";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import Grid from "@components/Portfolio/Grid.vue";
import Page from "@components/Portfolio/Page.vue";
import Photo from "@components/Portfolio/Photo.vue";

const head = createHead();

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
  faExternalLinkAlt,
  faEnvelope,
  faCloudSun,
  faMoon,
  faMapMarkerAlt,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faInstagram,
  faYoutube,
  faApple,
  faAndroid,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

// import {  } from "@fortawesome/free-regular-svg-icons";

export default (app: App) => {
  app.use(head);
  app.use(i18n);
  app.use(StoryblokVue, {
    accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
  });
  app.use(MotionPlugin);

  /* add icons to the library */
  library.add(
    faExternalLinkAlt,
    faEnvelope,
    faWhatsapp,
    faInstagram,
    faYoutube,
    faCloudSun,
    faMoon,
    faMapMarkerAlt,
    faApple,
    faAndroid,
    faChrome,
    faHouseChimney
  );

  app.component("font-awesome-icon", FontAwesomeIcon);
  app.component("font-awesome-layers", FontAwesomeLayers);
  app.component("Page", Page);
  app.component("Grid", Grid);
  app.component("Photo", Photo);
};
