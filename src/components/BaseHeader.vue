<script setup lang="ts">
import { i18n } from "@src/pages/_app.ts";
import { watchEffect, ref } from "vue";
import IconIndomascot from "@components/Icon/IndomascotLogo.vue";
import DarkToggle from "@components/DarkToggle.vue";
import { useStorage } from "@vueuse/core";
import { mainMenu } from "@src/states";
import { useStore } from "@nanostores/vue";

const $mainMenu = useStore(mainMenu);

function openMainMenu() {
  if (!mainMenu.get()) mainMenu.set(true);
}

const locale = ref(i18n.global.locale);

const colorScheme = useStorage("vueuse-color-scheme", "light"); // returns Ref<boolean>

useHead({
  htmlAttrs: {
    lang: locale.value,
    "data-theme": colorScheme.value,
  },
});
</script>

<template>
  <header
    id="main-header"
    class="container sticky top-0 z-50 mx-auto grid w-full flex-none content-center"
    :class="{ 'blur-sm': $mainMenu }"
  >
    <div
      class="supports-backdrop-blur:bg-white/60 navbar h-[72px] backdrop-blur transition will-change-[filter]"
    >
      <div class="flex-1">
        <a href="/">
          <IconIndomascot />
        </a>
      </div>
      <!-- main menu button -->
      <div class="flex-none">
        <DarkToggle client:only="vue" />
        <button
          class="btn-shadow btn-gradient btn-primary btn ml-2 rounded-full px-6 pt-1 shadow-inner"
          :class="{ 'btn-disabled': $mainMenu }"
          @click="openMainMenu()"
        >
          <span class="josefin-sans font-semibold shadow-inner">MENU</span>
        </button>
      </div>
      <!-- END main menu button -->
    </div>
  </header>
</template>

<style lang="scss" scope></style>
