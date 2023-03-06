<script lang="ts" setup>
import { ref } from "vue";
import { Image } from "@unpic/vue";

defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const alt = ref("");
const title = ref("");

// mounted() {
//   const $t = this.$t.bind(this);
//   const caption = this.blok.caption;

//   this.alt += $t("dollMascotCostume", [caption]);
//   this.title = $t("fullSizePhoto", [caption]);
// },
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
        provider="storyblok"
        loading="lazy"
        width="342"
        height="342"
        sizes="xs:237px lg:342px"
        :src="`${blok.photo}/m/`"
        :alt="blok.caption"
        :title="title"
        :placeholder="[100, 100, 10]"
        background="auto"
      />
    </a>
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
