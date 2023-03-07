<script setup lang="ts">
import "lazysizes";
import Carousel from "@components/Lightbox/Carousel.vue";
import IconClose from "@components/Icon/Close.vue";
import { lightbox } from "@src/states";
import { useStore } from "@nanostores/vue";

import "swiper/css";

const isLightbox = useStore(lightbox);

const closeLightbox = () => {
  document.body.style.overflow = "auto";

  lightbox.set(false);
};
</script>

<template>
  <Teleport to="body">
    <div
      v-show="isLightbox"
      class="fixed left-0 top-0 z-[9999] h-screen w-screen bg-slate-900/90"
    >
      <div class="relative z-[10000]">
        <div class="relative z-[102] overflow-auto">
          <div class="absolute flex w-screen justify-end">
            <div class="z-[105] p-4" @click.stop="closeLightbox">
              <IconClose />
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
