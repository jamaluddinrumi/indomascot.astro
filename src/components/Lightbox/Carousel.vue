<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { Navigation, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "lazysizes";
import { slide, lightbox } from "@src/states";
import { useStore } from "@nanostores/vue";
import { useStoryblok } from "@storyblok/vue";
import { Image } from "@unpic/vue";

import "swiper/css";
import "swiper/css/navigation";

const isLightbox = useStore(lightbox);

const whatSlide = useStore(slide);

const swiperRef = ref(null);

watch(whatSlide, () => {
  if (swiperRef.value !== null) {
    swiperRef.value.slideTo(whatSlide.value);
  }
});

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const onInit = (swiper) => {
  console.log("on init carousel");
};

const onDestroy = (swiper) => {
  console.log("on destroy carousel");
};

const content = ref(new Object());
const photos = ref(new Array());

useStoryblok("badut-maskot", { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
    photos.value = await content.value.body[0].columns;
  })
  .catch((error) => console.log(error));
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="[Navigation, A11y, Thumbs]"
    navigation
    grab-cursor
    :preload-images="false"
    :aria-hidden="!isLightbox"
    @swiper="onSwiper"
    @init="onInit"
    @destroy="onDestroy"
  >
    <SwiperSlide
      v-for="(photo, index) in photos"
      :key="index"
      class="!grid !h-screen place-items-center"
    >
      <div>
        <Image
          :src="`${photo.photo}/m/628x628`"
          layout="constrained"
          width="628"
          height="628"
          class="photo-mascot swiper-lazy rounded-xl border-0 border-none"
          :alt="photo.caption"
        />
        <div class="swiper-lazy-preloader"></div>
        <div
          class="photo-caption mt-1 text-center font-semibold text-slate-300"
        >
          {{ photo.caption }}
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
}
</style>
