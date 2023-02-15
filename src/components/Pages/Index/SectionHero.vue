<script setup lang="ts">
import $device from "@src/device";
</script>

<template>
  <header class="grid grid-cols-1 gap-0 lg:grid-cols-2">
    <div class="left order-2 grid place-content-center lg:order-1">
      <h1 class="mt-8 mb-0 text-center lg:mt-0">
        <span
          class="animate-text overflow-x-hidden bg-gradient-to-r from-[#0066FF] via-[#CC66FF] to-[#66CCFF] bg-clip-text text-2xl font-bold uppercase text-transparent"
        >
          {{ $t("titleHero") }}
        </span>
      </h1>
      <h4 class="mb-0 text-center font-sans text-base leading-8 sm:leading-9">
        "{{ $t("weProduce") }}"
      </h4>
    </div>
    <div
      class="right z-10 order-1 flex w-screen justify-center lg:order-2 lg:w-auto"
    >
      <img
        ref="teamDesktop"
        provider="storyblok"
        width="606"
        height="586"
        src="https://a.storyblok.com/f/118728/606x586/25d1c7753f/tim-produksi-glowing-up.png"
        class="hidden rounded-2xl lg:block"
        :fetchpriority="$device.isDesktop ? 'high' : 'low'"
        :preload="$device.isDesktop"
        :alt="$t('productionTeam')"
      />
      <img
        ref="teamMobile"
        provider="storyblok"
        width="460"
        height="460"
        src="https://a.storyblok.com/f/118728/460x460/19985a823c/tim-produksi-lagi.png"
        class="block lg:hidden"
        :fetchpriority="$device.isMobile ? 'high' : 'low'"
        :placeholder="[100, 100, 10]"
        :alt="$t('productionTeam')"
      />
    </div>
  </header>
</template>
