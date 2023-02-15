<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import IconIndomascot from "@components/Icon/IndomascotLogo.vue";
import DarkToggle from "@components/DarkToggle.vue";
import { mainMenu, isDark } from "@src/states";
import { useStore } from "@nanostores/vue";

const $mainMenu = useStore(mainMenu);

const $isDark = useStore(isDark);

function openMainMenu() {
  if (!mainMenu.get()) mainMenu.set(true);
}

const i18n = useI18n();

const locale = ref(i18n.locale);

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "theme-color",
      content: computed(() => ($isDark.value ? "#13111C" : "#8532CE")),
    },
  ],
});
</script>

<template>
  <header
    id="main-header"
    class="container sticky top-0 z-50 mx-auto grid max-w-sm flex-none content-center lg:max-w-6xl"
  >
    <div
      class="supports-backdrop-blur:bg-white/60 navbar h-[72px] px-5 backdrop-blur transition will-change-[filter]"
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
