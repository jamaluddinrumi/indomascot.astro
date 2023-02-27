<script setup lang="ts">
import SectionClients from "@components/Pages/Index/SectionClients.vue";
import SectionDefinition from "@components/Pages/Index/SectionDefinition.vue";
import SectionFeaturedService from "@components/Pages/Index/SectionFeaturedService.vue";
import SectionFitting from "@components/Pages/Index/SectionFitting.vue";
import SectionHero from "@components/Pages/Index/SectionHero.vue";
import SectionLatestOrders from "@components/Pages/Index/SectionLatestOrders.vue";
import SectionPortfolio from "@components/Pages/Index/SectionPortfolio.vue";
import SectionVisionMision from "@components/Pages/Index/SectionVisionMision.vue";

const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <SectionHero client:only="vue" />
  <SectionClients client:only="vue" />
  <SectionDefinition client:only="vue" />
  <SectionVisionMision client:only="vue" />
  <SectionFeaturedService client:only="vue" />
  <SectionPortfolio client:only="vue" />
  <!-- <SectionLatestOrders client:only="vue"  />
  <SectionFitting client:only="vue"  /> -->
</template>
