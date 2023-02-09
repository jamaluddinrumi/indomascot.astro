<script setup lang="ts">
import { toRefs, toRaw, ref, onMounted } from "vue";

const props = defineProps({
  Astro: {
    type: Object,
    default: new Object(),
  },
});

const { Astro } = toRaw(props);

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
  Astro.props as BreadcrumbsProps
);

// const paths = Astro.url.pathname.split("/").filter((crumb: any) => crumb);
// const ariaCurrent = Astro.request.url.pathname === "/" ? "page" : undefined;

// /**
//  * Array of breadcrumb items.
//  * The first item is the index page.
//  */
// let parts: Array<BreadcrumbItem> = [
//   {
//     text: indexText,
//     href: "/",
//     "aria-current": ariaCurrent,
//   },
// ];

// /**
//  * Loop through the paths and create a breadcrumb item for each.
//  */
// paths.forEach((text: string, index: number) => {
//   const href = `/${paths.slice(0, index + 1).join("/")}`;

//   parts = [
//     ...parts,
//     {
//       text: text.replace(/[-_]/g, " "),
//       href,
//       "aria-current": ariaCurrent,
//     },
//   ];
// });
</script>

<template>
  <div>{{ Astro.url }}</div>
</template>
