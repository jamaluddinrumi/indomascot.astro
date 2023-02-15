<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-editable="blok"
    class="grid grid-cols-3 gap-0 lg:-ml-0 lg:w-auto lg:gap-x-0.5 lg:gap-y-12"
  >
    <div v-for="blok in blok.columns" :key="blok._uid">
      <component :is="blok.component" :blok="blok" />
    </div>
  </div>
</template>
