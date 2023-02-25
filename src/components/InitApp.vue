<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  inheritLocale?: string;
}>();

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
  <div>
    <slot />
  </div>
</template>
