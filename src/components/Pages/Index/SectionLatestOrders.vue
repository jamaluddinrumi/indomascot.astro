<script setup lang="ts">
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import IconOnFinal from "@components/Icon/OnFinal.vue";
import IconOnProgress from "@components/Icon/OnProgress.vue";
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { Image } from "@unpic/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";
import { dateOptions } from "@src/date";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const { t, locale } = useI18n();

const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = (swiper) => {
  // console.log("slide change");
};

const content = ref(new Object());
const photos = ref(new Array());

useStoryblok("badut-maskot", { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
    photos.value = await content.value.body[0].columns;
    photos.value = photos.value.reverse();
    photos.value.length = 10;
  })
  .catch((error) => console.log(error));

const modules = ref([Navigation, Pagination, EffectCoverflow]);

const alt = (caption: string, uploaded_date: string) => {
  return `${caption} ${caption !== "" ? "-" : ""}
          ${new Date(uploaded_date).toLocaleDateString(
            locale.value,
            dateOptions
          )}`;
};
</script>

<template>
  <div class="relative mx-auto mt-20 mb-0 w-fit lg:mt-32 lg:mb-8">
    <div
      class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
      :class="[
        $device.isDesktopOrTablet ? 'h-[40px] w-[190px]' : 'h-[24px] w-[125px]',
      ]"
    />
    <h2 id="portfolio-title" class="relative z-10 mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-bold uppercase leading-8 text-idm-title lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem]"
      >
        {{ t("newest") }}
      </span>
    </h2>
  </div>
  <swiper
    :modules="modules"
    effect="coverflow"
    :centered-slides="true"
    :grab-cursor="true"
    slides-per-view="auto"
    :space-between="0"
    :loop="false"
    :pagination="{ el: '.swiper-pagination', type: 'bullets' }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :coverflow-effect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :mousewheel="{ invert: false, forceToAxis: true }"
    :initial-slide="$device.isDesktopOrTablet ? 1 : 0"
    class="min-h-min !py-4 pb-16"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide
      v-for="(photo, index) in photos"
      :key="index"
      class="portfolio-item max-w-full border border-slate-200 bg-white text-center shadow lg:max-w-fit"
    >
      <div
        v-show="photo.on_progress === false || photo.on_progress === undefined"
        class="relative z-10"
      >
        <span
          class="label absolute top-0 right-0 rounded bg-primary px-3 shadow-inner"
        >
          <IconOnFinal />
          <span class="ml-1 text-xs font-bold text-white">Final</span>
        </span>
      </div>
      <div v-show="photo.on_progress" class="relative z-10">
        <span
          class="label absolute top-0 right-0 rounded bg-indomascot-yellow px-3 shadow-inner"
        >
          <IconOnProgress />
          <span class="ml-1 text-xs font-bold text-white">On Progress</span>
        </span>
      </div>

      <Image
        cdn="storyblok"
        layout="constrained"
        width="371"
        height="371"
        :src="photo.photo"
        background="auto"
        :title="photo.caption"
        :alt="alt(photo.caption, photo.uploaded_date)"
      />
    </swiper-slide>
    <div class="swiper-button-prev left-[4%] -mt-16 lg:left-[2%]" />
    <div class="swiper-button-next right-[4%] -mt-16 lg:right-[2%]" />
    <div class="swiper-pagination" />
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
  --swiper-pagination-bullet-inactive-color: white;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-inactive-opacity: 1;
}
</style>
