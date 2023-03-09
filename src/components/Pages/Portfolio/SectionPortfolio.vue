<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import Lightbox from "@components/Pages/Portfolio/Lightbox.vue";
import { useI18n } from "vue-i18n";
import { dateOptions } from "@src/date";

const storyPath = ref("badut-maskot");

const { t, locale } = useI18n();

const story = ref({});

const content = ref({});

const storyPublishedAt = ref("");

useStoryblok(storyPath.value, { version: "draft" })
  .then(async (data) => {
    story.value = await data.value;
    content.value = await story.value.content;
    const published_at = await story.value.published_at;
    storyPublishedAt.value = await new Date(published_at).toLocaleDateString(
      locale.value,
      dateOptions
    );
  })
  .catch((error) => console.log(error));
</script>

<template>
  <header>
    <h1
      class="mt-8 text-center text-lg font-bold uppercase lg:mt-12 lg:text-4xl"
    >
      {{ t("mascotCostume") }}
    </h1>
    <i18n-t
      scope="global"
      keypath="mascotCostumeSubtitle"
      tag="p"
      class="subtitle p-2 text-center lg:p-0"
    >
      <template #allSize>
        <span class="italic">{{ t("allSize") }}</span>
      </template>
    </i18n-t>
  </header>

  <StoryblokComponent v-if="story" :blok="content" :story="storyPath" />

  <p class="ml-4 mt-8 p-4 lg:p-0">
    <span class="text-sm italic">
      {{ t("lastUpdated") }}
      {{ storyPublishedAt }}
    </span>
  </p>

  <Lightbox />
</template>
