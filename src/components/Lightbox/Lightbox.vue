<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  lightboxSlidePortfolio as slide,
  lightboxPortfolio as lightbox,
} from "@src/states";
import { useStore } from "@nanostores/vue";
import { useStoryblok } from "@storyblok/vue";
import { Image } from "@unpic/vue";

import "swiper/css";
import "swiper/css/navigation";

const story = ref("badut-maskot");

const isLightbox = useStore(lightbox);

const whatSlide = useStore(slide);

const swiperRef = ref<InstanceType<typeof Swiper>>();

watch(whatSlide, () => {
  if (swiperRef.value !== null) {
    swiperRef.value.slideTo(whatSlide.value);
  }
});

const onSwiper = (swiper: typeof Swiper) => {
  swiperRef.value = swiper;
};

const onInit = (swiper: typeof Swiper) => {
  console.log("on init carousel");
};

const onDestroy = (swipe: typeof Swiper) => {
  console.log("on destroy carousel");
};

const content = ref(new Object());
const photos = ref(new Array());

useStoryblok(story.value, { version: "draft" })
  .then(async (data) => {
    console.log("story kuda:", story.value);

    content.value = data.value.content;
    photos.value = await content.value.body[0].columns;
  })
  .catch((error) => console.log(error));

const closeLightbox = () => {
  lightbox.set(false);
  // setTimeout(() => {
  //   swiperRef.value?.destroy();
  // }, 250);

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
      <div class="container relative z-[10000] mx-auto">
        <div class="relative z-[102] overflow-auto">
          <div class="container absolute mx-auto flex justify-end">
            <button
              class="bg-primary btn-circle btn z-[105] mt-4 mr-4 hover:bg-primary"
              @click.stop="closeLightbox"
            >
              <font-awesome-icon
                :icon="['fas', 'close']"
                aria-hidden="true"
                class="!h-5 !w-5 text-slate-100/90"
              />
            </button>
          </div>
          <div class="relative z-[103]">
            <Swiper
              :initial-slide="whatSlide"
              :slides-per-view="1"
              :space-between="50"
              :modules="[Navigation, A11y]"
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
                    class="photo-caption mt-1 text-center font-semibold text-neutral-content"
                  >
                    {{ photo.caption }}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
}
</style>
