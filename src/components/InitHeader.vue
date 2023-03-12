<script setup lang="ts">
import { ref, computed } from "vue";
import BaseHeader from "@components/BaseHeader.vue";
import FlashyBg from "@components/FlashyBg.vue";
import { useDark, useStorage } from "@vueuse/core";
import { inheritLocale, menus as menusState } from "@src/states";
import { useI18n } from "vue-i18n";
import type { Menu } from "@src/menu";
import { themeChange } from "theme-change";

const props = defineProps({
  inheritLocale: {
    type: String,
    default: "id",
  },
  menus: {
    type: Array<Menu>,
    default: new Array<Menu>(),
  },
});

const themeStorage = useStorage("vueuse-color-scheme", "auto");

const menus = ref(props.menus);

menusState.set(props.menus);

const isDark = useDark();

const { locale } = useI18n({ useScope: "global" });

themeChange(false);

inheritLocale.set(props.inheritLocale);

locale.value = <string>props.inheritLocale;

useHead({
  meta: [
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#13111C" : "#8532CE")),
    },
  ],
  htmlAttrs: {
    "data-theme": computed(() =>
      themeStorage.value === "light" ? "light" : "dark"
    ),
  },
});

try {
} catch (error) {
  console.log(error);
} finally {
  // console.log(computed(() => t("aboutUs")).value);
}
</script>

<template>
  <FlashyBg />
  <BaseHeader client:only="vue" :menus="menus" />
</template>
