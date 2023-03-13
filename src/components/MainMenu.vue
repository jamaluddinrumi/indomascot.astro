<script lang="ts" setup>
import $device from "@src/device";
import { ref, onMounted, computed } from "vue";
import { onClickOutside, useToggle, useDark, useStorage } from "@vueuse/core";
import InstallButton from "@components/InstallButton.vue";
import { mainMenu } from "@src/states";
import { useStore } from "@nanostores/vue";
import { useI18n } from "vue-i18n";
import { getBrowserHeight, Dimension } from "@src/dimension";
import { prependTrailingSlash } from "@src/utils";
import type { Menu } from "@src/menu";
import { useMotions } from "@vueuse/motion";

const themeStorage = useStorage("vueuse-color-scheme", "auto");

const themes = [true, false];

const isDark = useDark();

const toggleDark = useToggle(isDark);

const theme = computed({
  get() {
    return isDark.value;
  },
  set(newTheme) {
    toggleDark(newTheme);
  },
});

const props = defineProps({
  localizedPaths: {
    type: Object,
    default: new Object(),
  },
  inheritLocale: {
    type: String,
    default: "",
  },
  menus: {
    type: Array<Menu>,
    default: new Array<Menu>(),
  },
  url: {
    type: URL,
    required: true,
  },
});

const menusRef = ref(props.menus);

const inheritLocaleRef = ref(props.inheritLocale);

const { t, availableLocales } = useI18n();

const $mainMenu = useStore(mainMenu);

const menuHalaman = ref(null);

onClickOutside(menuHalaman, () => mainMenu.set(false));

const browserDimension = ref<Dimension>({ width: 0, height: 0 });

const switchLanguage = ref(function (event: Event) {});

const switchTheme = ref(function (event: Event) {});

onMounted(() => {
  browserDimension.value = getBrowserHeight();

  switchLanguage.value = function (event: Event) {
    const target = <HTMLSelectElement>event.target;

    const lang = target.value;

    window.location = props.localizedPaths[lang];
  };

  switchTheme.value = function (event: Event) {
    const target = <HTMLSelectElement>event.target;

    const theme = target.value;

    themeStorage.value = theme === "true" ? "dark" : "light";

    useHead({
      htmlAttrs: {
        "data-theme": computed(() => themeStorage.value),
      },
    });

    mainMenu.set(false);
  };
});

const motions = useMotions();
</script>

<template>
  <Transition
    :css="false"
    @leave="(_: any, done: () => void) => motions.transition.leave(done)"
  >
    <div
      v-if="$mainMenu"
      id="main-menu"
      v-motion="'transition'"
      :initial="{
        y: -browserDimension.height,
      }"
      :enter="{
        y: 0,
        transition: {
          type: 'keyframes',
          duration: 300,
          ease: 'easeOut',
          delay: 10,
        },
      }"
      :leave="{
        y: -browserDimension.height,
        transition: {
          type: 'keyframes',
          duration: 200,
          ease: 'easeIn',
          delay: 500,
        },
      }"
      class="fixed top-0 left-0 z-[9999] mx-auto h-screen w-screen max-w-none overflow-y-scroll backdrop-blur-3xl"
      style="-webkit-transform: translate3d(0, 0, 0)"
    >
      <div class="relative">
        <nav
          class="grid min-h-screen place-content-center overflow-y-scroll pt-16 pb-40 lg:pb-20"
        >
          <ul id="menu-halaman" ref="menuHalaman" class="vertical justify menu">
            <li v-for="menu in menusRef" :key="menu.text" class="my-0.5">
              <a
                rel="prefetch"
                class="menu-item flex justify-center rounded-full py-4 px-8"
                :class="{
                  'btn-shadow btn-gradient active':
                    url.pathname === menu.href ||
                    url.pathname === prependTrailingSlash(menu.href),
                }"
                :href="menu.href"
                :aria-label="menu.href === '/' ? t('homepage') : menu.text"
              >
                <span class="josefin-sans text-base font-bold uppercase">
                  {{ t(menu.text) }}
                </span>
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
                    :selected="
                      availableLocale === inheritLocaleRef ? true : false
                    "
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
                    v-for="(themeItem, index) in themes"
                    :key="index"
                    :value="themeItem"
                    :selected="themeItem === theme"
                  >
                    {{ t(themeItem === true ? "dark" : "light") }}
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
  </Transition>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #main-menu {
    @apply bg-base-300/70;
  }
}

[data-theme="light"] {
  #main-menu {
    @apply bg-base-100/70;
  }
}
</style>
