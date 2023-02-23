<script setup lang="ts">
import $device from "@src/device";
import { Image } from "@unpic/vue";
</script>

<template>
  <section class="grid grid-cols-1 gap-0 lg:grid-cols-2">
    <div class="left order-2 grid place-content-center lg:order-1">
      <h1 class="mt-8 mb-0 text-center lg:mt-0">
        <span
          class="animate-text overflow-x-hidden bg-gradient-to-r from-[#0066FF] via-[#CC66FF] to-[#66CCFF] bg-clip-text text-2xl font-bold uppercase text-transparent"
        >
          {{ $t("titleHero") }}
        </span>
      </h1>
      <h4
        class="mb-0 px-4 text-center font-sans leading-8 sm:leading-9 lg:px-0"
      >
        "{{ $t("weProduce") }}"
      </h4>
    </div>
    <div
      class="right z-10 order-1 flex w-screen justify-center lg:order-2 lg:w-auto"
    >
      <div
        class="hidden h-[586px] w-[640px] items-center justify-center rounded-2xl lg:flex"
      >
        <div
          id="bg-blur-tim-produksi"
          class="absolute h-[586px] w-[640px] rounded bg-[url(/public/tim-produksi-on-desktop.svg)] blur-3xl"
        ></div>
        <Image
          cdn="storyblok"
          src="https://a.storyblok.com/f/118728/480x456/70a7b547ec/tim-produksi-on-desktop.png/m/"
          class="absolute w-fit max-w-fit"
          width="480"
          height="456"
          :priority="$device.isDesktop ? true : false"
          :preload="$device.isDesktop"
          :alt="$t('productionTeam')"
        />
      </div>
      <Image
        cdn="storyblok"
        width="414"
        height="414"
        src="https://a.storyblok.com/f/118728/414x414/b9bdd0ccf5/tim-produksi-on-mobile.jpg/m/"
        class="block bg-auto lg:hidden"
        :priority="$device.isMobile ? true : false"
        :alt="$t('productionTeam')"
        background="auto"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-theme="light"] #bg-blur-tim-produksi {
  @apply opacity-80;
}

[data-theme="dark"] #bg-blur-tim-produksi {
  @apply opacity-20;
}
</style>
