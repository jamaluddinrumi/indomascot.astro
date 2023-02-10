<script lang="ts" setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import FlashyBg from "@components/FlashyBg.vue";
import IconClose from "@components/Icon/Close.vue";
import IconFlagId from "@components/Icon/FlagId.vue";
import IconFlagEn from "@components/Icon/FlagEn.vue";
import InstallButton from "@components/InstallButton.vue";
import { mainMenu } from "/src/states";
import { useStore } from "@nanostores/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n(/*{ useScope: 'global' }*/);

const $mainMenu = useStore(mainMenu);

const menuHalaman = ref(null);

onClickOutside(menuHalaman, (event) => mainMenu.set(false));

const menus = [
  {
    text: t("portfolio"),
    href: "/badut-maskot",
  },
  {
    text: t("howToOrder"),
    href: "/cara-pemesanan",
  },
  {
    text: t("designFitting"),
    href: "/",
  },
  {
    text: t("termsAndConditions"),
    href: "/syarat-ketentuan",
  },
  {
    text: t("aboutUs"),
    href: "/tentang-kami",
  },
  {
    text: t("blog"),
    href: "/blog",
  },
];
</script>

<template>
  <div
    v-if="$mainMenu"
    id="main-menu"
    v-motion
    :initial="{
      y: -100,
    }"
    :enter="{
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      },
    }"
    class="absolute top-0 z-[9999] min-h-screen min-w-full"
  >
    <div class="grid-container">
      <div class="mt-4 flex justify-end pr-2">
        <div class="flex w-[76px] justify-center">
          <button
            class="shadow-none hover:cursor-pointer"
            data-close
            aria-label="Close modal"
            type="button"
          >
            <IconClose />
          </button>
        </div>
      </div>
      <nav class="grid place-content-center">
        <ul
          id="menu-halaman"
          ref="menuHalaman"
          class="vertical justify menu mx-auto"
        >
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="/"
              aria-label="Homepage"
            >
              <font-awesome-layers class="fa-fw">
                <font-awesome-icon
                  :icon="['fas', 'home']"
                  aria-hidden="true"
                  class="shadow-inner"
                />
              </font-awesome-layers>
            </a>
          </li>
          <li v-for="menu in menus" :key="menu.href" class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              :href="menu.href"
            >
              <span class="josefin-sans text-base font-bold uppercase">
                {{ menu.text }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$indomascot-old-blue: #003399;
</style>
