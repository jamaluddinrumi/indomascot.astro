<script setup lang="ts">
import { ref } from "vue";
import { useToggle, useDark } from "@vueuse/core";
import { mainMenu } from "@src/states";
import { useStore } from "@nanostores/vue";

const $mainMenu = ref(useStore(mainMenu));

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>

<template>
  <label
    id="dark-toggle-label"
    for="dark-toggle"
    class="btn-shadow swap-rotate swap btn-primary btn rounded-full shadow-inner"
    :class="{ 'label-disabled': $mainMenu }"
  >
    <!-- this hidden checkbox controls the state -->
    <input
      id="dark-toggle"
      type="checkbox"
      true-value="true"
      false-value="false"
      aria-labelledby="dark-toggle-label"
      @click="toggleDark()"
    />

    <!-- sun icon -->
    <font-awesome-layers class="fa-fw swap-on">
      <font-awesome-icon
        :icon="['fas', 'cloud-sun']"
        aria-hidden="true"
        class="mt-px mr-1 h-4 w-4 shadow-inner lg:mr-0.5 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>

    <!-- moon icon -->
    <font-awesome-layers class="fa-fw swap-off">
      <font-awesome-icon
        :icon="['fas', 'moon']"
        aria-hidden="true"
        class="mt-px mr-1 h-4 w-4 shadow-inner lg:mr-0.5 lg:h-5 lg:w-5"
      />
    </font-awesome-layers>
  </label>
</template>

<style>
.label-disabled,
.label-disabled:hover,
.label[disabled],
.label[disabled]:hover {
  --tw-border-opacity: 0;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.2;
  color: hsl(var(--bc) / var(--tw-text-opacity));
  --tw-text-opacity: 0.2;
}
</style>
