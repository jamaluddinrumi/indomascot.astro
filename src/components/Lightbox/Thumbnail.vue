<script setup lang="ts">
import { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { slide } from "@src/states";

import "swiper/css";

const emit = defineEmits(["thumbs"]);

const onSwiper = (swiper) => {
  emit("thumbs", swiper);
};
</script>

<template>
  <Swiper
    :slides-per-view="10"
    :space-between="50"
    :modules="[Thumbs]"
    watch-slides-progress
    @swiper="onSwiper"
  >
    <SwiperSlide
      v-for="n in 20"
      :key="n"
      @click.stop="slide.set(Number(n) - 1)"
    >
      <img
        :src="'https://picsum.photos/id/' + n + '/640/480'"
        style="height: 100px"
      />
    </SwiperSlide>
  </Swiper>
</template>
