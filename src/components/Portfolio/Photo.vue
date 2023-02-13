<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n(/*{ useScope: 'global' }*/);

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const alt = ref("");
const title = ref("");
const caption = ref("");
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
      <img
        provider="storyblok"
        loading="lazy"
        width="342"
        height="342"
        sizes="xs:237px lg:342px"
        :src="blok.photo"
        :alt="blok.caption"
        :title="title"
        :placeholder="[100, 100, 10]"
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
