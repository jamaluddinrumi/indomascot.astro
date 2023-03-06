<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Menu } from "@src/menu";

const props = defineProps({
  menus: {
    type: Array<Menu>,
    default: new Array<Menu>(),
  },
});

const { t } = useI18n(/*{ useScope: 'global' }*/);
</script>

<template>
  <div class="container mx-auto hidden lg:block">
    <nav role="navigation" class="mt-16 pb-8">
      <ul
        id="menu-bawah"
        class="flex flex-col justify-center lg:flex-row lg:space-x-4"
      >
        <li v-for="menu in menus" :key="menu.href">
          <a
            rel="prefetch"
            class="link uppercase no-underline"
            :href="menu.href"
            :aria-label="t(menu.text)"
          >
            <template v-if="menu.text === 'homepage'">
              <font-awesome-layers class="fa-fw lg:mr-1">
                <font-awesome-icon
                  id="nav-text"
                  class="!mb-0.5"
                  :icon="['fas', 'house-chimney']"
                  aria-hidden="true"
                />
              </font-awesome-layers>
            </template>
            <template v-else>
              <span id="nav-text" class="font-bold">
                {{ t(menu.text) }}
              </span>
            </template>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
