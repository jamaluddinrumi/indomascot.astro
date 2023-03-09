<script lang="ts" setup>
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
  <div v-editable="blok" class="min-h-screen">
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :story="story"
    />
  </div>
</template>
