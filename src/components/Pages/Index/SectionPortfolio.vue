<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { useI18n } from "vue-i18n";

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
    <h2
      id="portfolio-title"
      class="min-h has-text-align-center mb-4 text-[1.5rem] uppercase leading-8 lg:mb-12 lg:min-h-fit lg:text-[2.5rem] lg:leading-[3rem]"
    >
      {{ t("portfolio") }}
    </h2>
    <StoryblokComponent v-if="content" :blok="content" />
  </div>
</template>
