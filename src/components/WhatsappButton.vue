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
        class="mr-0 h-4 w-4 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>
    <span class="ml-0.5 tracking-wide">
      {{ t("whatsAppNo") }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
.whatsapp.button {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#00ff5f+0,25d366+100 */
  background: #00ff5f;
  /* Old browsers */
  background: -moz-linear-gradient(top, #00ff5f 0%, #25d366 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #00ff5f 0%, #25d366 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #00ff5f 0%, #25d366 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff5f', endColorstr='#25d366', GradientType=0);
  /* IE6-9 */
}
</style>
