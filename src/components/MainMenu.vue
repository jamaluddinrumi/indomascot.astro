<script lang="ts" setup>
import $device from "/src/device";
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import FlashyBg from "@components/FlashyBg.vue";
import IconClose from "@components/Icon/Close.vue";
import IconFlagId from "@components/Icon/FlagId.vue";
import IconFlagEn from "@components/Icon/FlagEn.vue";
import InstallButton from "@components/InstallButton.vue";
import { mainMenu } from "/src/states";
import { useStore } from "@nanostores/vue";
import { useI18n } from "vue-i18n";
import { getBrowserHeight, Dimension } from "/src/dimension";

const props = defineProps({
  pathname: {
    type: String,
    default: undefined,
  },
});

const { t } = useI18n(/*{ useScope: 'global' }*/);

const $mainMenu = useStore(mainMenu);

const menuHalaman = ref(null);

onClickOutside(menuHalaman, (event) => mainMenu.set(false));

const menus = ref([
  {
    text: "",
    href: "/",
  },
  {
    text: t("portfolio"),
    href: "/badut-maskot/",
  },
  {
    text: t("howToOrder"),
    href: "/cara-pemesanan/",
  },
  {
    text: t("designFitting"),
    href: "/#fitting",
  },
  {
    text: t("termsAndConditions"),
    href: "/syarat-ketentuan/",
  },
  {
    text: t("aboutUs"),
    href: "/tentang-kami/",
  },
  {
    text: t("blog"),
    href: "/blog/",
  },
]);

const browserDimension = ref<Dimension>(null);

onMounted(() => {
  browserDimension.value = getBrowserHeight();
});
</script>

<template>
  <div
    v-if="$mainMenu"
    id="main-menu"
    v-motion
    :initial="{
      y: -browserDimension.height,
    }"
    :enter="{
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
        delay: 10,
      },
    }"
    :leave="{
      y: -browserDimension.height,
    }"
    class="fixed top-0 left-0 z-[9999] mx-auto h-screen w-screen max-w-none overflow-y-scroll bg-base-100"
  >
    <div class="relative">
      <nav
        class="grid min-h-screen place-content-center overflow-y-scroll py-16"
      >
        <ul id="menu-halaman" ref="menuHalaman" class="vertical justify menu">
          <li v-for="menu in menus" :key="menu.href" class="my-0.5">
            <a
              class="btn-wide flex justify-center rounded-full p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              :class="{ active: menu.href === pathname }"
              :href="menu.href"
            >
              <template v-if="menu.href === '/'">
                <font-awesome-layers class="fa-fw">
                  <font-awesome-icon
                    :icon="['fas', 'house-chimney']"
                    aria-hidden="true"
                    class="shadow-inner"
                  />
                </font-awesome-layers>
              </template>

              <template v-else>
                <span class="josefin-sans text-base font-bold uppercase">
                  {{ menu.text }}
                </span>
              </template>
            </a>
          </li>
          <li class="mx-auto mt-4 flex w-fit justify-center">
            <InstallButton :disabled="$device.isDesktop" icon="apple" />
          </li>
          <li class="mx-auto mt-2 flex w-fit justify-center">
            <InstallButton :disabled="$device.isDesktop" icon="android" />
          </li>
          <li class="mx-auto mt-2 mb-4 flex w-fit justify-center">
            <InstallButton icon="chrome" />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav ul.menu > li a.active > span {
  @apply text-base-300;
}
</style>
