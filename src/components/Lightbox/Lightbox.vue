<script setup lang="ts">
import "lazysizes";
import Carousel from "@components/Lightbox/Carousel.vue";
import IconClose from "@components/Icon/Close.vue";
import { lightbox } from "@src/states";
import { useStore } from "@nanostores/vue";

import "swiper/css";

const isLightbox = useStore(lightbox);

const closeLightbox = () => {
  lightbox.set(false);

  document.body.style.overflow = "scroll";
  document.body.scroll = "yes";
};
</script>

<template>
  <Teleport to="body">
    <div
      v-show="isLightbox"
      class="fixed left-0 top-0 z-[9999] h-screen w-screen bg-slate-900/90 backdrop-blur"
    >
      <div class="relative z-[10000]">
        <div class="relative z-[102] overflow-auto">
          <div class="absolute flex w-screen justify-end">
            <div class="z-[105] p-4" @click.stop="closeLightbox">
              <font-awesome-icon
                :icon="['fas', 'close']"
                aria-hidden="true"
                class="!h-8 !w-8 fill-neutral-content/90 text-neutral-content/90 lg:mt-1 lg:!h-8 lg:!w-8"
              />
            </div>
          </div>
          <div class="relative z-[103]">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
