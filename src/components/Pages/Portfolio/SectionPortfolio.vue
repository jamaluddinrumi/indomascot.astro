<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import Lightbox from "@components/Pages/Portfolio/Lightbox.vue";
import { useI18n } from "vue-i18n";
import { dateOptions } from "@src/date";
import $device from "@src/device";

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
    <div class="relative mx-auto mt-8 w-fit lg:mt-12">
      <div
        class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg w-full h-full"
      />
      <h1 class="text-center text-lg font-bold uppercase lg:text-4xl">
        {{ t("mascotCostume") }}
      </h1>
    </div>
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
