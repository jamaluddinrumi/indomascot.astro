<script setup lang="ts">
import { startCase } from "lodash-es";
import { useI18n } from "vue-i18n";
import type { Menu } from "@src/menu";

const { t } = useI18n();

const props = defineProps({
  pathname: {
    type: String,
    default: undefined,
  },
  reqPathname: {
    type: String,
    default: undefined,
  },
  inheritLocale: {
    type: String,
    default: undefined,
  },
  menus: {
    type: Array<Menu>,
    default: new Array<Menu>(),
  },
});

interface BreadcrumbItem {
  text: string;
  href: string;
  alt: string;
  "aria-label": string;
}

// const paths = Astro.url.pathname.split("/").filter((crumb: any) => crumb);
const paths = props.pathname?.split("/").filter((crumb: any) => crumb);

/**
 * Array of breadcrumb items.
 * The first item is the index page.
 */
let parts: Array<BreadcrumbItem> = [];

if (props.inheritLocale === "id") {
  parts.push({
    text: t("homepage"),
    href: "/",
    alt: t("homepage"),
    "aria-label": t("homepage"),
  });
}

/**
 * Loop through the paths and create a breadcrumb item for each.
 */
paths?.forEach((text: string, index: number) => {
  const href = `/${paths.slice(0, index + 1).join("/")}`;

  const link: Menu = <Menu>(
    props.menus?.find((item: Menu) => item.href === href)
  );

  const linkText = link.text;

  parts = [
    ...parts,
    {
      text: linkText,
      href,
      alt: startCase(text),
      "aria-label": startCase(text),
    },
  ];
});

parts = parts.filter(function (item) {
  return item.text !== "en";
});
</script>

<template>
  <nav
    v-if="pathname !== ('/' && '/en')"
    aria-label="Breadcrumbs"
    class="container navbar breadcrumbs mx-auto w-full max-w-sm px-5 lg:max-w-6xl"
  >
    <ul>
      <li v-for="(part, index) in parts" :key="part.href">
        <a
          :href="part.href"
          :alt="part.alt"
          :aria-label="part['aria-label']"
          :aria-current="index === parts.length - 1 ? 'page' : false"
        >
          <template v-if="part.href === '/' || part.href === '/en'">
            <font-awesome-layers class="fa-fw">
              <font-awesome-icon
                class="logo !mb-0.5"
                :icon="['fas', 'house-chimney']"
                aria-hidden="true"
              />
            </font-awesome-layers>
          </template>
          <template v-else>
            <span>
              {{ t(part.text) }}
            </span>
          </template>
        </a>
      </li>
    </ul>
  </nav>
</template>
