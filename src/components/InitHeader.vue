<script setup lang="ts">
import BaseHeader from "@components/BaseHeader.vue";
import FlashyBg from "@components/FlashyBg.vue";
import InitApp from "@components/InitApp.vue";

const props = defineProps<{
  inheritLocale?: string;
  homeUrl?: string;
}>();
</script>

<template>
  <InitApp client:only :inheritLocale="inheritLocale" />
  <FlashyBg />
  <BaseHeader client:only="vue" :homeUrl="homeUrl" />
</template>
