<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  locale?: string;
}>();

const { t, locale } = useI18n({ useScope: "global" });

try {
  locale.value = <string>props.locale;
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
