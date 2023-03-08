<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";

const { t } = useI18n();
const content = ref(new Object());

const story = ref("halaman-depan");

useStoryblok(story.value, { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
  })
  .catch((error) => console.log(error));
</script>

<template>
  <div id="portfolio-homepage" class="mt-16">
    <div class="relative mx-auto w-fit">
      <div
        id="bg-blur"
        class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
        :class="[
          $device.isDesktopOrTablet
            ? 'h-[40px] w-[240px]'
            : 'h-[24px] w-[145px]',
        ]"
      ></div>
      <h2 id="portfolio-title" class="relative mb-4 lg:mb-12">
        <span
          id="title-text"
          class="text-[1.5rem] font-bold uppercase leading-8 text-idm-title lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem]"
        >
          {{ t("portfolio") }}
        </span>
      </h2>
    </div>
    <StoryblokComponent v-if="content" :blok="content" :story="story" />
  </div>
</template>
