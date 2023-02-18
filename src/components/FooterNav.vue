<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n(/*{ useScope: 'global' }*/);

const props = defineProps({
  menus: {
    type: Array,
    default: new Array(),
  },
});

const menus = ref(
  props.menus.map((menu) => ({
    text: menu.text ? computed(() => t(menu.text)) : "",
    href: menu.href,
  }))
);
</script>

<template>
  <div class="container mx-auto">
    <nav role="navigation" class="mt-16 hidden pb-8 lg:block">
      <ul id="menu-bawah" class="flex flex-col justify-center lg:flex-row">
        <li>
          <a
            class="link no-underline lg:pr-2 lg:pl-2"
            href="/"
            aria-label="Homepage"
          >
            <font-awesome-layers class="fa-fw lg:mr-1">
              <font-awesome-icon
                class="!mb-0.5"
                :icon="['fas', 'house-chimney']"
                aria-hidden="true"
              />
            </font-awesome-layers>
          </a>
        </li>
        <li v-for="menu in menus" :key="menu.href">
          <a
            rel="prefetch"
            class="link font-bold uppercase no-underline lg:py-4 lg:pr-2 lg:pl-2"
            :href="menu.href"
          >
            <span class="font-semibold">
              {{ menu.text }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
