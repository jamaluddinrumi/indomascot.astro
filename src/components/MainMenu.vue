<script lang="ts" setup>
import $device from "@src/device";
import { ref, onMounted, computed } from "vue";
import { onClickOutside } from "@vueuse/core";
import InstallButton from "@components/InstallButton.vue";
import { mainMenu, isDark } from "@src/states";
import { useStore } from "@nanostores/vue";
import { useI18n } from "vue-i18n";
import { getBrowserHeight, Dimension } from "@src/dimension";
import { themeChange } from "theme-change";

const themes = ref(["light", "dark"]);

const theme = computed({
  get() {
    return isDark.value.value ? "dark" : "light";
  },
  set(theme) {
    isDark.value.value = theme === "dark" ? true : false;
  },
});

const props = defineProps({
  pathname: {
    type: String,
    default: undefined,
  },
  inheritLocale: {
    type: String,
    default: "id",
  },
  menus: {
    type: Array,
    default: new Array(),
  },
  localizedPaths: {
    type: Object,
    default: new Object(),
  },
});

const inheritLocaleRef = ref(props.inheritLocale);

const { t, availableLocales, locale } = useI18n({
  useScope: "global",
});

const $mainMenu = useStore(mainMenu);

const menuHalaman = ref(null);

onClickOutside(menuHalaman, () => mainMenu.set(false));

const menus = ref(
  props.menus.map((menu) => ({
    text: menu.text ? computed(() => t(menu.text)) : "",
    href: menu.href,
  }))
);

const browserDimension = ref<Dimension>(null);

const switchLanguage = ref(function (event: Event) {});

const switchTheme = ref(function (event: Event) {});

onMounted(() => {
  browserDimension.value = getBrowserHeight();

  switchLanguage.value = function (event: Event) {
    const lang = event.target.value;

    window.location = props.localizedPaths[lang];
  };

  themeChange(false);

  switchTheme.value = function (event: Event) {
    const theme = event.target.value;

    localStorage.setItem("vueuse-color-scheme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  };
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
    class="fixed top-0 left-0 z-[9999] mx-auto h-screen w-screen max-w-none overflow-y-scroll backdrop-blur-3xl"
    style="-webkit-transform: translate3d(0, 0, 0)"
  >
    <div class="relative">
      <nav
        class="grid min-h-screen place-content-center overflow-y-scroll pt-16 pb-40 lg:pb-20"
      >
        <ul id="menu-halaman" ref="menuHalaman" class="vertical justify menu">
          <li v-for="menu in menus" :key="menu.href" class="my-0.5">
            <a
              rel="prefetch"
              class="flex justify-center rounded-full p-4 focus-visible:ring focus-visible:ring-indomascot-yellow"
              :class="{
                'btn-shadow btn-gradient active':
                  menu.href === pathname || menu.href === `${pathname}/`,
              }"
              :href="menu.href"
            >
              <template v-if="!menu.text">
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
          <li class="my-2">
            <div class="form-control hover:bg-transparent">
              <label class="label">
                <span class="label-text">{{ t("chooseLanguage") }}:</span>
              </label>
              <select
                v-model="inheritLocaleRef"
                @change="switchLanguage"
                class="select-bordered select w-full max-w-xs"
              >
                <option
                  v-for="availableLocale in availableLocales"
                  :key="availableLocale"
                  :value="availableLocale"
                  :selected="availableLocale === inheritLocale ? true : false"
                >
                  {{ t(`language.${availableLocale}`) }}
                </option>
              </select>
            </div>
          </li>
          <li class="my-2">
            <div class="form-control hover:bg-transparent">
              <label class="label">
                <span class="label-text">{{ t("chooseTheme") }}:</span>
              </label>
              <select
                v-model="theme"
                @change="switchTheme"
                class="select-bordered select w-full max-w-xs"
              >
                <option
                  v-for="themeItem in themes"
                  :key="themeItem"
                  :value="themeItem"
                  :selected="themeItem === theme ? true : false"
                >
                  {{ t(themeItem) }}
                </option>
              </select>
            </div>
          </li>
          <li class="mx-auto mt-11 flex w-fit justify-center lg:hidden">
            <InstallButton :disabled="$device.isDesktop" icon="apple" />
          </li>
          <li class="mx-auto mt-2 flex w-fit justify-center lg:hidden">
            <InstallButton :disabled="$device.isDesktop" icon="android" />
          </li>
          <li class="mx-auto mt-2 mb-4 flex w-fit justify-center lg:hidden">
            <InstallButton icon="chrome" />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
