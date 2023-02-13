<script lang="ts" setup>
import { ref } from "vue";

const clients = ref({
  client1: {
    id: "grab",
    src: "https://a.storyblok.com/f/118728/120x55/fc122308dc/grab.png",
    width: "120",
    height: "55",
    sizes: "xs:120px lg:120px",
  },
  client2: {
    id: "konimex",
    src: "https://a.storyblok.com/f/118728/214x55/cdaf31b2aa/konimex.png",
    width: "213",
    height: "55",
    sizes: "xs:213px lg:213px",
  },
  client3: {
    id: "lazada",
    src: "https://a.storyblok.com/f/118728/170x55/7d98053c86/lazada.png",
    width: "170",
    height: "55",
    sizes: "xs:170px lg:170px",
  },
  client4: {
    id: "ojk",
    src: "https://a.storyblok.com/f/118728/137x55/d59535918b/ojk.png",
    width: "137",
    height: "55",
    sizes: "xs:137px lg:137px",
  },
});
</script>

<template>
  <div class="mt-8 lg:mt-0">
    <div class="mx-auto w-full">
      <h3 class="title mb-0 text-center">
        <span class="text-base font-bold uppercase">
          {{ $t("featuredClients") }}
        </span>
      </h3>
    </div>
    <div class="mt-0 grid grid-rows-1 opacity-50 lg:mt-8 lg:grid-cols-5">
      <img
        v-for="(client, index) in clients"
        :key="index"
        provider="storyblok"
        preload
        class="mx-auto mt-4 max-h-[55px] lg:mt-0"
        :src="client.src"
        :alt="client.id"
        :width="client.width"
        :height="client.height"
        :sizes="client.sizes"
      />
      <div
        class="wp-block-column mt-4 flex items-center justify-center lg:mt-0"
      >
        <p class="has-text-align-center mt-4 leading-4">
          {{ $t("andManyMore") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="light"] .title {
  @apply opacity-50;
}
</style>
