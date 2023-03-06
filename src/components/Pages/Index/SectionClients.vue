<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const clients = ref({
  client1: {
    id: "grab",
    src: "https://a.storyblok.com/f/118728/129x55/844456bd71/grab.svg",
    width: "129",
    height: "55",
    sizes: "xs:120px lg:120px",
  },
  client2: {
    id: "konimex",
    src: "https://a.storyblok.com/f/118728/207x56/7158aece7e/konimex.svg",
    width: "207",
    height: "56",
    sizes: "xs:213px lg:213px",
  },
  client3: {
    id: "lazada",
    src: "https://a.storyblok.com/f/118728/170x55/52730f0309/lazada.svg",
    width: "170",
    height: "55",
    sizes: "xs:170px lg:170px",
  },
  client4: {
    id: "ojk",
    src: "https://a.storyblok.com/f/118728/184x55/99380a6a72/ojk.svg",
    width: "184",
    height: "55",
    sizes: "xs:137px lg:137px",
  },
});
</script>

<template>
  <div class="mt-8 lg:mt-0">
    <div class="mx-auto w-full">
      <h3 class="title mb-0 text-center">
        <span class="font-bold uppercase">
          {{ t("featuredClients") }}
        </span>
      </h3>
    </div>
    <div class="mt-0 grid grid-rows-1 lg:mt-8 lg:grid-cols-5">
      <img
        v-for="(client, index) in clients"
        :key="index"
        cdn="storyblok"
        preload
        class="mx-auto mt-4 max-h-[55px] lg:mt-0"
        :src="client.src"
        :alt="client.id"
        :width="client.width"
        :height="client.height"
        :sizes="client.sizes"
      />
      <div class="mt-4 flex items-center justify-center lg:mt-0">
        <span
          class="has-text-align-center mt-4 font-sans leading-4 text-idm-base-200"
        >
          {{ t("andManyMore") }}
        </span>
      </div>
    </div>
  </div>
</template>
