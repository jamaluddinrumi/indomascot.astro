<script setup lang="ts">
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import IconOnFinal from "@components/Icon/OnFinal.vue";
import IconOnProgress from "@components/Icon/OnProgress.vue";
import { ref, onMounted } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { Image } from "@unpic/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";
import Human from "@components/Icon/Human.vue";
import menus from "@src/menu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const { t, locale } = useI18n();

const portfolioTransKey = "portfolio";

const portfolioLink = ref(
  menus.find((item) => item.text === portfolioTransKey).href
);

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
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

const dateOptions = ref({
  year: "numeric",
  month: "long",
  day: "numeric",
});

const modules = ref([Navigation, Pagination, EffectCoverflow]);
</script>

<template>
  <div class="relative mx-auto mt-20 mb-0 w-fit lg:mt-32 lg:mb-8">
    <div
      id="bg-blur"
      class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
      :class="[
        $device.isDesktopOrTablet ? 'h-[40px] w-[190px]' : 'h-[24px] w-[125px]',
      ]"
    ></div>
    <h2 id="portfolio-title" class="relative mb-0">
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
      <a
        :href="`${photo.photo}/m/628x628`"
        rel="lightbox noopener"
        target="_blank"
        data-featherlight="image"
        :alt="photo.caption"
      >
        <Image
          cdn="storyblok"
          width="371"
          height="371"
          :src="`${photo.photo}/m/371x371`"
          :alt="`${photo.caption} ${photo.caption !== '' ? '-' : ''}
          ${new Date(photo.uploaded_date).toLocaleDateString(
            $i18n.locale,
            dateOptions
          )}`"
          :title="photo.caption"
          background="auto"
        />
      </a>
      <figcaption class="mb-2 hidden h-7 text-center text-sm">
        {{ photo.caption }}
      </figcaption>
    </swiper-slide>
    <div class="swiper-button-prev left-[4%] -mt-16 lg:left-[2%]" />
    <div class="swiper-button-next right-[4%] -mt-16 lg:right-[2%]" />
    <div class="swiper-pagination" />
  </swiper>
  <div class="mb-8 mt-4 grid grid-cols-1 lg:mt-12">
    <div class="relative flex justify-center">
      <a
        class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide shadow-2xl"
        :href="portfolioLink"
        :aria-label="t(portfolioTransKey)"
      >
        <div class="fa-fw fa-layers">
          <Human />
        </div>
        <span
          class="ml-0 mr-0.5 text-xs font-bold uppercase leading-normal text-neutral-content lg:ml-0.5 lg:text-base"
        >
          {{ $t("showMore") }}
        </span>
      </a>
      <span
        class="absolute left-[calc(50%_+_5.5rem)] top-0 -mt-1 -mr-1 flex h-5 w-5"
        :class="[
          locale === 'id'
            ? 'lg:left-[calc(50%_+_7rem)]'
            : 'lg:left-[calc(50%_+_4.5rem)]',
        ]"
      >
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-t from-[#23c770] to-lime-400 opacity-75"
        />
        <span
          class="relative inline-flex h-5 w-5 rounded-full bg-gradient-radial from-[#45e992] to-[#23c770]"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
}
</style>
