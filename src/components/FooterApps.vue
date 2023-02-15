<script setup lang="ts">
import $device from "@src/device";
import InstallButton from "@components/InstallButton.vue";
</script>

<template>
  <ul class="ml-0 list-outside list-none text-left">
    <li class="mb-3 flex justify-center">
      <InstallButton :disabled="$device.isDesktop" icon="apple" />
    </li>
    <li class="mb-3 flex justify-center">
      <InstallButton :disabled="$device.isDesktop" icon="android" />
    </li>
    <li class="mb-3 flex justify-center">
      <InstallButton icon="chrome" />
    </li>
  </ul>
</template>
