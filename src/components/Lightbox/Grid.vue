<script setup lang="ts">
import { ref } from "vue";
import Lightbox from "@components/Lightbox/Lightbox.vue";
import { useStoryblok } from "@storyblok/vue";

const content = ref(new Object());

useStoryblok("badut-maskot", { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
    // photos.value = await content.value.body[0].columns;
  })
  .catch((error) => console.log(error));

const dateOptions = ref({
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>

<template>
  <StoryblokComponent v-if="content" :blok="content" />

  <Lightbox />
</template>
