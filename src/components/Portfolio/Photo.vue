<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Image } from "@unpic/vue";

const { t } = useI18n(/*{ useScope: 'global' }*/);

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  alt: {
    type: String,
    default: "",
    required: false,
  },
});

const caption = ref(props.blok.caption);

const alt = ref("");
alt.value += t("dollMascotCostume", [caption.value]);

const title = ref("");
title.value = t("fullSizePhoto", [caption.value]);
</script>

<template>
  <figure
    v-editable="blok"
    class="portfolio-item mx-auto max-w-full border border-slate-200 bg-white shadow lg:max-w-fit"
  >
    <a
      :href="`${blok.photo}/m/628x628`"
      rel="lightbox noopener"
      target="_blank"
      data-featherlight="image"
      :alt="alt"
    >
      <Image
        cdn="storyblok"
        loading="lazy"
        width="342"
        height="342"
        sizes="xs:237px lg:342px"
        :src="`${blok.photo}/m/342x342`"
        :alt="blok.caption"
        :title="title"
        background="auto"
      />
    </a>
    <figcaption class="mb-2 hidden h-7 text-center text-sm lg:block">
      {{ blok.caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
figure.portfolio-item.wp-block-image > a img {
  border-radius: 4px;
}
</style>
