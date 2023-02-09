<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import {
  useToggle,
  useDark,
  useColorMode,
  usePreferredColorScheme,
} from "@vueuse/core";
import { isDark } from "/src/states";
import { useStore } from "@nanostores/vue";

const $isDark = useStore(isDark);

const toggleDark = useToggle(isDark.value);

watchEffect(() => {
  isDark.set($isDark.value);
});
</script>

<template>
  <label class="swap-rotate swap btn-outline btn">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      true-value="true"
      false-value="false"
      @click="toggleDark()"
    />

    <!-- sun icon -->
    <font-awesome-layers class="fa-fw swap-on">
      <font-awesome-icon
        :icon="['fas', 'sun']"
        aria-hidden="true"
        class="mt-px mr-1 h-4 w-4 lg:mr-0.5 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>

    <!-- moon icon -->
    <font-awesome-layers class="fa-fw swap-off">
      <font-awesome-icon
        :icon="['fas', 'moon']"
        aria-hidden="true"
        class="mt-px mr-1 h-4 w-4 lg:mr-0.5 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>
  </label>
</template>
