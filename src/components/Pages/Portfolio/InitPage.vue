<script setup lang="ts">
import SectionPortfolio from "@components/Pages/Portfolio/SectionPortfolio.vue";
import SectionTitle from "@components/Pages/Portfolio/SectionTitle.vue";
</script>

<template>
  <SectionTitle client:only="vue" />
  <SectionPortfolio client:only="vue" />
</template>
