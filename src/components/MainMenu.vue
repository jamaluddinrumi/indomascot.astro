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

const $mainMenu = useStore(mainMenu);

const menuHalaman = ref(null);

onClickOutside(menuHalaman, (event) => mainMenu.set(false));
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
    }"
    class="top-0 z-[9999] px-0 py-4"
  >
    <div class="grid-container">
      <div class="flex justify-end pr-2">
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
                <font-awesome-icon :icon="['fas', 'home']" aria-hidden="true" />
              </font-awesome-layers>
            </a>
          </li>
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="cara-pemesanan"
            >
              <span class="josefin-sans text-base font-bold uppercase">{{
                $t("howToOrder")
              }}</span>
            </a>
          </li>
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="/"
            >
              <span class="josefin-sans text-base font-bold uppercase">{{
                $t("designFitting")
              }}</span>
            </a>
          </li>
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="syarat-ketentuan"
            >
              <span class="josefin-sans text-base font-bold uppercase">{{
                $t("termsAndConditions")
              }}</span>
            </a>
          </li>
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="tentang-kami"
            >
              <span class="josefin-sans text-base font-bold uppercase">{{
                $t("aboutUs")
              }}</span>
            </a>
          </li>
          <li class="menu-item mb-0">
            <a
              class="btn-wide flex justify-center p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              href="blog"
            >
              <span class="josefin-sans text-base font-bold uppercase">
                {{ $t("blog") }}
              </span>
            </a>
          </li>
          <!-- <li class="kontak-whatsapp menu-item">
        <whatsapp-button class="mt-4 w-fit"></whatsapp-button>
      </li> -->
          <li class="menu-item mt-4 flex justify-center">
            <InstallButton icon="apple" :mobile="true" />
          </li>
          <li class="menu-item flex justify-center">
            <InstallButton icon="android" :mobile="true" />
          </li>
          <li class="menu-item mb-4 flex justify-center">
            <InstallButton icon="chrome" :mobile="true" />
          </li>
          <li class="lg:hidden">
            <a
              class="mr-1 p-4 text-black no-underline hover:text-black focus:text-black focus-visible:ring focus-visible:ring-indomascot-yellow"
              aria-label="language switcher"
            >
              <span
                class="font-bold"
                :class="
                  $i18n.locale === 'en'
                    ? 'text-slate-400'
                    : 'text-indomascot-old-blue'
                "
                >ID</span
              >
              <span class="mr-0.5 inline-block align-middle">
                <IconFlagId />
              </span>
              <span class="text-slate-800">|</span>
              <span
                class="font-bold"
                :class="
                  $i18n.locale === 'id'
                    ? 'text-slate-400'
                    : 'text-indomascot-old-blue'
                "
                >EN</span
              >
              <span class="inline-block align-middle">
                <IconFlagEn />
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
