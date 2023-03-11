<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  hide: {
    type: Boolean,
    default: false,
  },
});

const footerHeight = ref(0);
const classHide = ref("translate-y-20 lg:translate-y-[626px] shadow-none");
const classShow = ref("translate-x-0 shadow-xl");

const waUrl = import.meta.env.PUBLIC_WA_URL;
</script>

<template>
  <a
    id="floating-whatsapp"
    :href="waUrl"
    class="floating-whatsapp focus-visible=outline-none link:text-white fixed bottom-6 right-5 z-[9999] h-[60px] w-[60px] rounded-full text-center text-3xl text-white transition-transform duration-500 ease-in-out will-change-[transform,shadow] visited:text-white hover:text-white active:text-white lg:duration-1000"
    :class="[hide ? classHide : classShow]"
    target="_blank"
    alt="kontak whatsapp"
    :aria-label="t('chatUsonWhatsapp')"
  >
    <font-awesome-layers class="fa-fw my-floating-whatsapp mt-[14px]">
      <font-awesome-icon :icon="['fab', 'whatsapp']" aria-hidden="true" />
    </font-awesome-layers>
  </a>
</template>

<style lang="scss" scoped>
#floating-whatsapp {
  @apply bg-[#00ff5f] bg-gradient-to-b from-[#00ff5f] to-[#25d366];
}
</style>
