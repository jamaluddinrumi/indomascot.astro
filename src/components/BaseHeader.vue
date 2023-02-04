<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import LocalChanger from "@components/LocalChanger.vue";
</script>

<template>
  <header
    id="main-header"
    class="header supports-backdrop-blur:bg-white/60 sticky top-0 z-[3001] w-full flex-none backdrop-blur transition"
  >
    <div class="grid-container">
      <LocalChanger />
    </div>
  </header>
</template>
