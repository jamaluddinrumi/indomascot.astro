<script lang="ts" setup>
import LightboxPortfolio from "@components/Pages/Index/LightboxPortfolio.vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  story: {
    type: String,
    default: "badut-maskot",
  },
});
</script>

<template>
  <div
    v-editable="blok"
    class="mt-6 grid grid-cols-3 gap-0 lg:mt-12 lg:-ml-0 lg:w-auto lg:gap-x-0.5 lg:gap-y-12"
  >
    <component
      :is="blok.component"
      v-for="(blok, index) in blok.columns"
      :key="blok._uid"
      :blok="blok"
      :index="index"
      :story="story"
    />
  </div>

  <LightboxPortfolio />
</template>
