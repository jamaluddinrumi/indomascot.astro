<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header>
    <h1
      class="mt-8 text-center text-lg font-bold uppercase lg:mt-12 lg:text-4xl"
    >
      {{ t("mascotCostume") }}
    </h1>
    <i18n-t
      scope="global"
      keypath="mascotCostumeSubtitle"
      tag="p"
      class="subtitle p-2 text-center lg:p-0"
    >
      <template #allSize>
        <span class="italic">{{ t("allSize") }}</span>
      </template>
    </i18n-t>
  </header>
</template>
