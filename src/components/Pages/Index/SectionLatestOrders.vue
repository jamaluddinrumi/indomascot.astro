<script setup lang="ts">
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import IconOnFinal from "@components/Icon/OnFinal.vue";
import IconOnProgress from "@components/Icon/OnProgress.vue";
import { ref, onMounted } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { Image } from "@unpic/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";
import { title } from "process";

const { t } = useI18n();

const props = defineProps<{
  modelValue?: boolean;
}>();

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
    content.value = await data.value.content;
    photos.value = content.value.body[0].columns;
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
  <div class="relative mx-auto mt-24 mb-4 w-fit lg:mb-8">
    <div
      id="bg-blur"
      class="absolute blur-lg"
      :class="[
        $device.isDesktopOrTablet ? 'h-[40px] w-[190px]' : 'h-[24px] w-[125px]',
      ]"
    ></div>
    <h2 id="portfolio-title" class="relative mb-4 lg:mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-semibold uppercase leading-8 lg:text-[2.5rem] lg:leading-[3rem]"
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
    :coverflowEffect="{
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
          class="label absolute top-0 right-0 rounded bg-indigo-500 px-3 shadow-inner"
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
  <!-- END OF swiper -->
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply text-small-title;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-600/20 to-small-title-darken/30;
  }
}

[data-theme="light"] {
  #title-text {
    @apply text-small-title-darken;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-indigo-300/20 to-small-title/30;
  }
}

.swiper {
  --swiper-theme-color: hsl(270, 60%, 52%);
  --swiper-pagination-bottom: 2rem;
}
</style>
