<script lang="ts" setup>
import WhatsappButton from "./WhatsappButton.vue";
</script>

<template>
  <section
    class="whatsapp-contact container mx-auto flex max-w-xs flex-col items-center rounded-xl border px-8 py-16 lg:max-w-7xl lg:flex-row lg:justify-between"
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
          {{ $t("forFastResponse") }}
        </div>
        <div class="text-center">
          {{ $t("aboutEstimatesEtc") }} {{ $t("pleaseContactUs") }}
        </div>
      </div>
    </div>
    <WhatsappButton :kontak="true" class="my-0" />
  </section>
</template>
