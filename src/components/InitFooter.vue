<script setup lang="ts">
import BaseFooter from "@components/BaseFooter.vue";
import MainMenu from "@components/MainMenu.vue";
import FloatingWhatsapp from "@components/FloatingWhatsapp.vue";
import WhatsappContact from "@components/WhatsappContact.vue";
import type { Menu } from "@src/menu";
import type { Locales } from "@src/locale";

const props = defineProps<{
  menus?: Array<Menu>;
  localizedPaths?: Locales;
  inheritLocale?: string;
  url?: URL;
}>();
</script>

<template>
  <WhatsappContact client:only="vue" />
  <BaseFooter client:only="vue" :menus="menus" />
  <MainMenu
    client:only="vue"
    :localizedPaths="localizedPaths"
    :inheritLocale="inheritLocale"
    :url="url"
    :menus="menus"
  />
  <FloatingWhatsapp client:only="vue" />
</template>
