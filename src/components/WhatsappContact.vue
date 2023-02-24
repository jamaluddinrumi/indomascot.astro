<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import WhatsappButton from "./WhatsappButton.vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section class="container mx-auto mt-20 max-w-sm px-5 lg:max-w-6xl lg:px-0">
    <div
      class="whatsapp-contact flex flex-col items-center rounded-xl border px-8 py-16 lg:flex-row lg:justify-between"
    >
      <div class="flex flex-col items-center lg:flex-row">
        <img
          id="whatsapp-logo"
          provider="storyblok"
          src="https://a.storyblok.com/f/118728/x/99230adb4b/whatsapp.svg"
          alt="whatsapp icon"
          width="63"
          height="63"
          sizes="xs:63px lg:63px"
          class="lg:mr-2"
        />
        <div id="kontak-kata-kata" class="">
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
      <WhatsappButton :kontak="true" class="mt-2 lg:mt-0" />
    </div>
  </section>
</template>
