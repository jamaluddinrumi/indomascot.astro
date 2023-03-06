<script setup lang="ts">
import BaseHeader from "@components/BaseHeader.vue";
import FlashyBg from "@components/FlashyBg.vue";
import { inheritLocale, menus } from "@src/states";
import { useI18n } from "vue-i18n";
import type { Menu } from "@src/menu";

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

inheritLocale.set(props.inheritLocale);
menus.set(props.menus);

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
  <BaseHeader client:only="vue" :menus="menus.value" />
</template>
