<script setup lang="ts">
import { computed, ref } from "vue";
import IconIndomascot from "@components/Icon/IndomascotLogo.vue";
import { mainMenu, isDark } from "@src/states";
import { useStore } from "@nanostores/vue";
import { menus } from "@src/states";

const homeLink = ref(menus.get().find((item) => item.text === "homepage"));
const homeLinkHref = homeLink.value.href;

const $mainMenu = useStore(mainMenu);

const $isDark = useStore(isDark);

function openMainMenu() {
  if (!mainMenu.get()) mainMenu.set(true);
}

useHead({
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
        <a :href="homeLinkHref">
          <IconIndomascot />
        </a>
      </div>
      <!-- main menu button -->
      <div class="flex-none">
        <button
          class="btn-shadow btn-gradient btn-primary btn ml-2 rounded-full px-6 pt-1 shadow-inner"
          :class="{ 'btn-disabled': $mainMenu }"
          @click="openMainMenu()"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            aria-hidden="true"
            class="mb-1 mr-px h-4 w-4 opacity-75"
          ></font-awesome-icon>
          <span class="josefin-sans font-bold text-neutral-content shadow-inner"
            >MENU</span
          >
        </button>
      </div>
      <!-- END main menu button -->
    </div>
  </header>
</template>

<style lang="scss" scope></style>
