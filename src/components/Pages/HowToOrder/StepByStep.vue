<script setup lang="ts">
import { ref } from "vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";
import { useStoryblok } from "@storyblok/vue";
import { menus } from "@src/states";
import { useStore } from "@nanostores/vue";
import { Image } from "@unpic/vue";
import $device from "@src/device";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const modules = ref([Navigation, Pagination, EffectCoverflow]);

const useMenus = useStore(menus);

const designFittingLink = useMenus.value.find(
  (menu) => menu.text === "designFitting"
);

const designFittingLinkHref = designFittingLink?.href;

const { t } = useI18n();

const story = ref({});

const fotoJadi = ref([
  "",
  "https://a.storyblok.com/f/118728/1400x1400/af8e956841/kostum-badut-maskot-hm-1.jpg",
  "https://a.storyblok.com/f/118728/1400x1400/db26f4df72/kostum-badut-maskot-hm-2.jpg",
  "https://a.storyblok.com/f/118728/1400x1400/6d3f770b46/kostum-badut-maskot-hm-3.jpg",
]);

useStoryblok("cara-pemesanan-badut-maskot", { version: "draft" })
  .then(async (data) => {
    story.value = data.value;
  })
  .catch((error) => console.log(error));

const getSidePhoto = (side: number) => {
  return `howToOrderMascotCostumeSteps.step4.${side}`;
};
</script>

<template>
  <div class="mb-16 lg:mb-32">
    <div class="relative mx-auto mt-8 w-fit lg:mt-12">
      <div
        class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
        :class="[
          $device.isDesktop ? 'h-[40px] w-[350px]' : 'h-[24px] w-[125px]',
        ]"
      />
      <h1 class="text-center text-lg font-bold uppercase lg:text-4xl">
        {{ t("howToOrder") }}
      </h1>
    </div>
    <ul
      class="cara-pemesanan mx-auto mt-16 max-w-none lg:mt-20 lg:max-w-[650px]"
    >
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step0") }}
          <a :href="designFittingLinkHref">
            <span class="underline decoration-dotted">{{ t("fitting") }}</span>
          </a>
          <font-awesome-icon
            :icon="['fas', 'external-link-alt']"
            class="ml-0.5 mb-0.5 text-xs lg:text-xl"
            aria-hidden="true"
          />
          {{ t("design") }}
        </h4>
        <Image
          cdn="storyblok"
          src="https://a.storyblok.com/f/118728/1400x1400/d02bad9e83/klien-fitting-desain.png"
          :alt="t('howToOrderMascotCostumeSteps.step0')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          fetchpriority="high"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
        <p class="mx-8 mt-8 mb-0 text-left text-xs italic text-slate-500/75">
          <sup>(*)</sup> {{ t("designOwnedBy") }}
          <a
            rel="noopener noreferrer nofollow "
            target="_blank"
            href="https://www.hanamakmur.com/"
            class="text-slate-500/75"
            >Hana Makmur Frozen Food</a
          >.
        </p>
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step1") }}
        </h4>
        <Image
          cdn="storyblok"
          loading="lazy"
          src="https://a.storyblok.com/f/118728/1400x1400/dc5aac0d1c/klien-share-desain.png"
          :alt="t('howToOrderMascotCostumeSteps.step1')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step2") }}
        </h4>
        <Image
          cdn="storyblok"
          loading="lazy"
          src="https://a.storyblok.com/f/118728/450x450/31320279fe/kami-kirimkan-surat-penawaran.png"
          :alt="t('howToOrderMascotCostumeSteps.step2')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step3") }}
        </h4>
        <Image
          cdn="storyblok"
          loading="lazy"
          src="https://a.storyblok.com/f/118728/450x450/7908d42698/klien-melakukan-dp.png"
          :alt="t('howToOrderMascotCostumeSteps.step3')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step4.0") }}
        </h4>
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
          class="mx-auto"
        >
          <swiper-slide v-for="a in 3" :key="a" class="swiper-slide">
            <Image
              :key="a"
              cdn="storyblok"
              loading="lazy"
              :src="fotoJadi[a]"
              :alt="t(getSidePhoto(a))"
              width="450"
              height="450"
              sizes="xs:273px lg:450px"
              background="auto"
              layout="constrained"
              class="mx-auto"
            />
          </swiper-slide>
          <div class="swiper-button-prev" />
          <div class="swiper-button-next" />
          <div class="swiper-pagination" />
        </swiper>
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step5") }}
        </h4>
        <Image
          cdn="storyblok"
          loading="lazy"
          src="https://a.storyblok.com/f/118728/450x450/012961d600/klien-melakukan-pelunasan.png"
          :alt="t('howToOrderMascotCostumeSteps.step5')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
      </li>
      <li class="cara-pemesanan-item">
        <h4>
          {{ t("howToOrderMascotCostumeSteps.step6") }}
        </h4>
        <Image
          cdn="storyblok"
          loading="lazy"
          src="https://a.storyblok.com/f/118728/450x450/39a7b1c597/kami-melakukan-pengiriman.png"
          :alt="t('howToOrderMascotCostumeSteps.step6')"
          width="450"
          height="450"
          sizes="xs:273px lg:450px"
          background="auto"
          layout="constrained"
          class="mx-auto"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
li.cara-pemesanan-item {
  counter-increment: stepcarapemesanan;
  @apply relative z-10 mx-4 mb-16 rounded-lg border-slate-900 bg-white pb-8 pt-10 text-center text-[2.5rem] shadow lg:mb-20;
}

li.cara-pemesanan-item::after {
  content: counter(stepcarapemesanan);
  @apply bg-gradient absolute top-[-28px] left-[calc(50%_-_28px)] h-16 w-16 rounded-full bg-primary text-center text-3xl font-semibold leading-loose text-white shadow;
}

.cara-pemesanan-item > h4 {
  @apply mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem];
}

.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
  --swiper-pagination-color: var(--idm-swiper);
  --swiper-pagination-bullet-inactive-color: white;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-navigation-sides-offset: 1rem;
}
</style>
