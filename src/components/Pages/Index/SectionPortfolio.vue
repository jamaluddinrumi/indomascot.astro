<script setup lang="ts">
import { ref } from "vue";
import { useStoryblok } from "@storyblok/vue";
import { useI18n } from "vue-i18n";
import $device from "@src/device";
import Human from "@components/Icon/Human.vue";
import menus from "@src/menu";

const portfolioTransKey = "portfolio";

const portfolioLink = ref(
  menus.find((item) => item.text === portfolioTransKey).href
);

const { t, locale } = useI18n();

const content = ref(new Object());

const story = ref("halaman-depan");

useStoryblok(story.value, { version: "draft" })
  .then(async (data) => {
    content.value = data.value.content;
  })
  .catch((error) => console.log(error));
</script>

<template>
  <div id="portfolio-homepage" class="mt-16">
    <div class="relative mx-auto w-fit">
      <div
        id="bg-blur"
        class="absolute h-full w-full bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
      />
      <h2 id="portfolio-title" class="relative mb-4 lg:mb-0">
        <span
          id="title-text"
          class="text-[1.5rem] font-bold uppercase leading-8 text-idm-title lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem]"
        >
          {{ t("portfolio") }}
        </span>
      </h2>
    </div>
    <StoryblokComponent v-if="content" :blok="content" :story="story" />
  </div>
  <div class="my-8 grid grid-cols-1 lg:mt-12">
    <div class="relative flex justify-center">
      <a
        class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide shadow-2xl"
        :href="portfolioLink"
        :aria-label="t(portfolioTransKey)"
      >
        <div class="fa-fw fa-layers">
          <Human />
        </div>
        <span
          class="ml-0 mr-0.5 text-xs font-bold uppercase leading-normal text-neutral-content lg:ml-0.5 lg:text-base"
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
