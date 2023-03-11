<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const waUrl = import.meta.env.PUBLIC_WA_URL;
</script>

<template>
  <a
    target="_blank"
    class="whatsapp button float-center w-fit whitespace-nowrap rounded-full px-6 py-3 text-center text-white no-underline"
    :aria-label="t('chatUsonWhatsapp')"
    :href="waUrl"
  >
    <font-awesome-layers class="fa-fw">
      <font-awesome-icon
        :icon="['fab', 'whatsapp']"
        aria-hidden="true"
        class="mt-0.5 mr-0 h-4 w-4 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>
    <span class="ml-0.5 tracking-wide">
      {{ t("whatsAppNo") }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
.whatsapp.button {
  @apply bg-[#00ff5f] bg-gradient-to-b from-[#00ff5f] to-[#25d366];
}
</style>
