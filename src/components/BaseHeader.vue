<script setup lang="ts">
import { watchEffect } from "vue";
import { mainMenu } from "/src/states";
import { useStore } from "@nanostores/vue";

const $mainMenu = useStore(mainMenu);

function openMainMenu() {
  mainMenu.set(!$mainMenu.value);
}
</script>

<template>
  <header
    id="main-header"
    class="header supports-backdrop-blur:bg-white/60 grid-container sticky top-0 z-[3001] w-full flex-none backdrop-blur transition will-change-[filter]"
    :class="{ blur: $mainMenu }"
  >
    <div class="navbar">
      <div class="flex-1">
        <a href="/" class="">
          <img
            preload
            provider="storyblok"
            width="188"
            height="32"
            src="https://a.storyblok.com/f/118728/x/494af7b03e/indomascot_logo_white.svg"
            class="custom-logo"
            alt="indomascot logo"
          />
        </a>
      </div>
      <div class="flex-none">
        <button class="btn-outline btn shadow-inner" @click="openMainMenu()">
          <span class="font-bold text-primary-content shadow-inner">MENU</span>
        </button>
      </div>
    </div>
  </header>
</template>
