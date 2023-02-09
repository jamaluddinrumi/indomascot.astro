<script setup lang="ts">
import { i18n } from "/src/pages/_app.ts";
import { watchEffect, ref } from "vue";
import { mainMenu } from "/src/states";
import { useStore } from "@nanostores/vue";
import IconIndomascot from "@components/Icon/IndomascotLogo.vue";
import DarkToggle from "@components/DarkToggle.vue";

const $mainMenu = ref(useStore(mainMenu));

function openMainMenu() {
  if (!mainMenu.get()) mainMenu.set(true);
}

const locale = ref(i18n.global.locale);

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>

<template>
  <header
    id="main-header"
    class="header supports-backdrop-blur:bg-white/60 grid-container sticky top-0 z-50 w-full flex-none backdrop-blur transition will-change-[filter]"
    :class="{ 'blur-sm': $mainMenu }"
  >
    <div class="navbar">
      <div class="flex-1">
        <a href="/">
          <IconIndomascot />
        </a>
      </div>
      <!-- main menu button -->
      <div class="flex-none">
        <DarkToggle client:only="vue" />
        <button
          class="btn-outline btn ml-2 shadow-inner"
          :class="{ 'btn-disabled': $mainMenu }"
          @click="openMainMenu()"
        >
          <span class="font-bold shadow-inner">MENU</span>
        </button>
      </div>
      <!-- END main menu button -->
    </div>
  </header>
</template>

<style lang="scss" scope></style>
