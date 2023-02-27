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
    class="portfolio-item border-[hsl(246, 18%, 15%)] mx-auto max-w-full border bg-white lg:max-w-fit lg:rounded-md"
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
        class="lg:rounded-t-md"
      />
    </a>
    <figcaption
      class="mb-2 hidden h-7 text-center text-sm text-small-title-darken lg:block"
    >
      {{ blok.caption }}
    </figcaption>
  </figure>
</template>

<style scoped></style>
