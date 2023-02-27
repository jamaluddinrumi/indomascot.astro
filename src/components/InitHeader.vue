<script setup lang="ts">
import BaseHeader from "@components/BaseHeader.vue";
import FlashyBg from "@components/FlashyBg.vue";
import { inheritLocale, url, menus } from "@src/states";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  inheritLocale?: string;
  menus?: Array<Object>;
  url?: URL;
}>();

inheritLocale.set(props.inheritLocale);
menus.set(props.menus);
url.set(props.url);

const { t, locale } = useI18n({ useScope: "global" });

try {
  locale.value = <string>props.inheritLocale;
} catch (error) {
  console.log(error);
} finally {
  // console.log(computed(() => t("aboutUs")).value);
}
</script>

<template>
  <FlashyBg />
  <BaseHeader client:only="vue" />
</template>
