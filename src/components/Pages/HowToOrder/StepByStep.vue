<script setup lang="ts">
import { ref } from "vue";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";
import { useStoryblok } from "@storyblok/vue";
import { menus } from "@src/states";
import { useStore } from "@nanostores/vue";
import { Image } from "@unpic/vue";

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
    <h1
      class="mt-8 text-center text-lg font-bold uppercase lg:mt-12 lg:text-4xl"
    >
      {{ t("howToOrder") }}
    </h1>
    <ul
      class="cara-pemesanan mx-auto mt-16 max-w-none lg:mt-20 lg:max-w-[650px]"
    >
      <li
        class="cara-pemesanan-item-baru satu mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
          {{ t("howToOrderMascotCostumeSteps.step0") }}
          <a :href="designFittingLinkHref">
            <span class="underline decoration-dotted">{{ t("fitting") }}</span>
          </a>
          <font-awesome-icon
            :icon="['fas', 'external-link-alt']"
            class="ml-0.5 mb-0.5 text-[1.125rem]"
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
      <li
        class="cara-pemesanan-item-baru satu mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
      <li
        class="cara-pemesanan-item-baru dua mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
      <li
        class="cara-pemesanan-item-baru tiga mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
      <li
        class="cara-pemesanan-item-baru empat mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
          <div id="swiper-pagination" />
        </swiper>
        <!-- END OF swiper -->
      </li>
      <li
        class="cara-pemesanan-item-baru lima mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
      <li
        class="cara-pemesanan-item-baru enam mb-16 text-center shadow-xl lg:mb-20"
      >
        <h4
          class="mt-4 mb-0 py-0 px-4 text-sm font-bold uppercase text-primary lg:text-[1.5rem]"
        >
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
li.cara-pemesanan-item-baru {
  z-index: 1;
  position: relative;
  padding: 3rem 0;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #ffffff;
  text-align: center;
  font-size: 2.5rem;
  counter-increment: stepcarapemesanan;
}

li.cara-pemesanan-item-baru::after {
  content: counter(stepcarapemesanan);
  position: absolute;
  top: -28px;
  left: calc(50% - 28px);
  width: 4rem;
  height: 4rem;
  color: #ffffff;
  border-radius: 200px;
  background-color: hsl(var(--p));
  box-shadow: rgba(50, 54, 72, 0.22) 0 2px 8px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 3.75rem;
  @apply bg-gradient;
}

.swiper {
  --swiper-theme-color: var(--idm-swiper);
  --swiper-pagination-bottom: 2rem;
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-sides-offset: 1rem;
}
</style>
