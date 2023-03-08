<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header>
    <h1 class="mt-8 text-center text-lg uppercase lg:mt-12 lg:text-4xl">
      {{ t("mascotCostume") }}
    </h1>
    <p class="subtitle p-2 text-center lg:p-0">
      {{ t("mascotCostumeSubtitle") }}
    </p>
  </header>
</template>
