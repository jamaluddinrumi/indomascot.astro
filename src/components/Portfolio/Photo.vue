<script lang="ts" setup>
import { Image } from "@unpic/vue";
import {
  lightbox,
  slide,
  lightboxPortfolio,
  lightboxSlidePortfolio,
} from "@src/states";
import { useStore } from "@nanostores/vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  story: {
    type: String,
    default: "badut-maskot",
  },
});

const { t } = useI18n();

const openCarousel = () => {
  if (props.story === "halaman-depan") {
    lightbox.set(true);
    slide.set(props.index);
  } else if (props.story === "badut-maskot") {
    lightboxPortfolio.set(true);
    lightboxSlidePortfolio.set(props.index);
  }

  document.body.style.overflow = "hidden";
  document.body.scroll = "no";
};
</script>

<template>
  <figure
    v-editable="blok"
    class="portfolio-item mx-auto max-w-full cursor-pointer border border-slate-200 bg-white shadow lg:max-w-fit"
  >
    <Image
      provider="storyblok"
      loading="lazy"
      width="342"
      height="342"
      sizes="xs:237px lg:342px"
      :src="`${blok.photo}/m/`"
      :alt="t('dollMascotCostume', [blok.caption])"
      :title="t('fullSizePhoto', [blok.caption])"
      background="auto"
      @click.stop="openCarousel"
    />
    <figcaption class="mb-2 hidden h-7 text-center lg:block">
      <span class="text-sm font-semibold text-primary">
        {{ blok.caption }}
      </span>
    </figcaption>
  </figure>
</template>

<style scoped>
figure.portfolio-item > a img {
  border-radius: 4px;
}
</style>
