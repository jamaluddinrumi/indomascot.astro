<script setup lang="ts">
import { toRefs, toRaw, ref, onMounted } from "vue";
import { startCase } from "lodash-es";

import { mainMenu } from "@src/states";
import { useStore } from "@nanostores/vue";

const $mainMenu = useStore(mainMenu);

const props = defineProps({
  pathname: {
    type: String,
    default: undefined,
  },
  reqPathname: {
    type: String,
    default: undefined,
  },
  locale: {
    type: String,
    default: undefined,
  },
});

interface BreadcrumbsProps {
  indexText?: string;
}

interface BreadcrumbItem {
  text: string;
  href: string;
  "aria-current"?: string;
  alt: string;
}

const { indexText = "Halaman Depan" } = ref(props.props as BreadcrumbsProps);

// const paths = Astro.url.pathname.split("/").filter((crumb: any) => crumb);
const paths = props.pathname.split("/").filter((crumb: any) => crumb);
// const ariaCurrent = Astro.request.url.pathname === "/" ? "page" : undefined;
const ariaCurrent = props.reqPathname === "/" ? "page" : undefined;

/**
 * Array of breadcrumb items.
 * The first item is the index page.
 */
let parts: Array<BreadcrumbItem> = [
  {
    text: indexText,
    href: props.locale === "id" ? "/" : "/en",
    alt: "",
  },
];

/**
 * Loop through the paths and create a breadcrumb item for each.
 */
paths.forEach((text: string, index: number) => {
  const href = `/${paths.slice(0, index + 1).join("/")}`;

  parts = [
    ...parts,
    {
      text: text.replace(/[-_]/g, " "),
      href,
      "aria-current": ariaCurrent,
      alt: startCase(text),
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
    :class="{ 'blur-sm': $mainMenu }"
  >
    <ul>
      <li v-for="(part, index) in parts" :key="part.href">
        <a
          :href="part.href"
          :alt="part.alt"
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
            <span class="logo">
              {{ startCase(part.text) }}
            </span>
          </template>
        </a>
      </li>
    </ul>
  </nav>
</template>
