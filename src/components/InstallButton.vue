<script lang="ts" setup>
import $device from "/src/device";
import { ref, computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const deferredPrompt = ref(null);
</script>

<template>
  <div class="flex flex-col items-center px-0">
    <button
      :disabled="disabled"
      class="gradient flex w-fit cursor-pointer justify-center rounded-full border bg-gradient-to-b px-6 py-4 uppercase tracking-wide disabled:cursor-not-allowed"
      @click="install()"
    >
      <font-awesome-layers class="fa-fw">
        <font-awesome-icon
          :icon="['fab', icon]"
          aria-hidden="true"
          class="mt-px h-4 w-4"
        />
      </font-awesome-layers>
      <span class="mx-0.5 text-xs font-bold uppercase leading-normal">{{
        $t("install")
      }}</span>
    </button>
    <label :for="id">
      <span class="bg-gradient-to-b bg-clip-text text-xs text-base-content/60"
        >(*) {{ $t(`onlyOn.${icon === "apple" ? "ios" : icon}`) }}</span
      >
    </label>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="light"] {
  .gradient {
    @apply from-slate-800 to-slate-900 text-slate-100;
  }
  svg {
    svg {
      @apply fill-slate-100/80 text-slate-100/80;
    }
  }
}

[data-theme="dark"] {
  .gradient {
    @apply from-slate-50 to-slate-100 text-slate-900;
  }
  svg {
    @apply fill-slate-900/80 text-slate-900/80;
  }
}
</style>
