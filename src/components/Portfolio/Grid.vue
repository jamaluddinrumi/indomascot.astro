<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-editable="blok"
    class="mt-6 grid grid-cols-3 gap-0 lg:mt-20 lg:-ml-0 lg:w-auto lg:gap-x-0.5 lg:gap-y-12"
  >
    <component
      :is="blok.component"
      v-for="(blok, index) in blok.columns"
      :key="blok._uid"
      :blok="blok"
      :index="index"
    />
  </div>
</template>
