<script setup lang="ts">
import { toRefs, toRaw, ref, onMounted } from "vue";
import { startCase } from "lodash-es";

import { mainMenu } from "/src/states";
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
});

interface BreadcrumbsProps {
  indexText?: string;
  mainBemClass?: string;
}

interface BreadcrumbItem {
  text: string;
  href: string;
  "aria-current"?: string;
}

const { indexText = "Home", mainBemClass = "c-breadcrumbs" } = ref(
  props.props as BreadcrumbsProps
);

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
    href: "/",
    "aria-current": ariaCurrent,
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
    },
  ];
});
</script>

<template>
  <nav
    v-if="pathname !== '/'"
    aria-label="Breadcrumbs"
    class="navbar breadcrumbs sm:max-w-xs"
    :class="{ 'blur-sm': $mainMenu }"
  >
    <ul>
      <li v-for="(part, index) in parts" :key="part.href">
        <a
          :href="part.href"
        >
          <template v-if="part.href === '/'">
            <font-awesome-layers class="fa-fw">
              <font-awesome-icon
                class="!mb-0.5"
                :icon="['fas', 'house-chimney']"
                aria-hidden="true"
              />
            </font-awesome-layers>
          </template>
          <template v-else>
            {{ startCase(part.text) }}
          </template>
        </a>
      </li>
    </ul>
  </nav>
</template>
