<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import Lightbox from "@components/Lightbox/Lightbox.vue";

const story = ref("badut-maskot");

const content = ref(new Object());

useStoryblok(story.value, { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
    // photos.value = await content.value.body[0].columns;
  })
  .catch((error) => console.log(error));
</script>

<template>
  <StoryblokComponent v-if="content" :blok="content" :story="story" />

  <Lightbox />
</template>
