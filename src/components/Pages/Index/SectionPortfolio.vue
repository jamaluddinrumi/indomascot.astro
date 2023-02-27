<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";

const { t } = useI18n();
const content = ref(new Object());

useStoryblok("halaman-depan", { version: "draft" })
  .then(async (data) => {
    content.value = await data.value.content;
  })
  .catch((error) => console.log(error));
</script>

<template>
  <div id="portfolio-homepage" class="mt-10 lg:mt-16">
    <div class="relative mx-auto w-fit">
      <div
        id="bg-blur"
        class="absolute h-10 w-60 blur-lg"
        :class="[
          $device.isDesktopOrTablet
            ? 'h-[40px] w-[240px]'
            : 'h-[24px] w-[145px]',
        ]"
      ></div>
      <h2 id="portfolio-title" class="relative mb-4 lg:mb-12">
        <span
          id="title-text"
          class="text-[1.5rem] font-semibold uppercase leading-8 lg:text-[2.5rem] lg:leading-[3rem]"
        >
          {{ t("portfolio") }}
        </span>
      </h2>
    </div>
    <StoryblokComponent v-if="content" :blok="content" />
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply text-small-title;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-small-title/20 to-railway/30;
  }
}

[data-theme="light"] {
  #title-text {
    @apply text-small-title-darken;
  }
  #bg-blur {
    @apply bg-gradient-to-t from-railway/10 to-small-title/10;
  }
}
</style>
