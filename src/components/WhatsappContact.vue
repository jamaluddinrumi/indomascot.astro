<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import WhatsappButton from "./WhatsappButton.vue";
import { Image } from "@unpic/vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section
    id="whatsapp-contact"
    class="container mx-auto mt-20 max-w-sm px-5 lg:max-w-6xl lg:px-0"
  >
    <div
      class="flex flex-col items-center rounded-xl border px-8 py-16 lg:flex-row lg:justify-between"
    >
      <div class="flex flex-col items-center lg:flex-row">
        <Image
          id="whatsapp-logo"
          cdn="storyblok"
          src="https://a.storyblok.com/f/118728/800x800/1fcef2ccc9/whatsapp-symbol-logo.svg"
          alt="whatsapp icon"
          width="50"
          height="50"
          sizes="xs:50px lg:50px"
          class="mb-1 lg:mb-0 lg:mr-3"
        />
        <div>
          <div
            class="text-center text-xl font-extrabold lg:text-left lg:text-3xl"
          >
            {{ t("forFastResponse") }}
          </div>
          <div class="text-center">
            {{ t("aboutEstimatesEtc") }} {{ t("pleaseContactUs") }}
          </div>
        </div>
      </div>
      <WhatsappButton class="mt-2 lg:mt-0" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #whatsapp-contact > div {
    border-color: rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
}

[data-theme="light"] {
  #whatsapp-contact > div {
    border-color: rgba(82, 41, 122, 0.05);
    background-color: rgba(82, 41, 122, 0.1);
  }
}
</style>
