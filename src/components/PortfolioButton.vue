<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { menus } from "@src/states";
import { ref } from "vue";
import Human from "@components/Icon/Human.vue";

const { t, locale } = useI18n();

const portfolioLink = ref(
  menus.get().find((item) => item.text === "portfolio")
);
</script>

<template>
  <div class="my-8 grid grid-cols-1 lg:mt-12">
    <div class="relative flex justify-center">
      <a
        class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide shadow-2xl"
        :href="portfolioLink.href"
        :aria-label="t(portfolioLink.text)"
      >
        <div class="fa-fw fa-layers">
          <Human />
        </div>
        <span
          class="ml-0 mr-0.5 text-xs font-bold uppercase leading-normal lg:ml-0.5 lg:text-base"
        >
          {{ $t("showMore") }}
        </span>
      </a>
      <span
        class="absolute left-[calc(50%_+_5.5rem)] top-0 -mt-1 -mr-1 flex h-5 w-5"
        :class="[
          locale === 'id'
            ? 'lg:left-[calc(50%_+_7rem)]'
            : 'lg:left-[calc(50%_+_4.5rem)]',
        ]"
      >
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-t from-[#23c770] to-lime-400 opacity-75"
        />
        <span
          class="relative inline-flex h-5 w-5 rounded-full bg-gradient-radial from-[#45e992] to-[#23c770]"
        />
      </span>
    </div>
  </div>
</template>
