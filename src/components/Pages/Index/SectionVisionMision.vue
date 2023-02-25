<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div
    id="visi-misi"
    class="mt-10 -ml-5 grid w-screen grid-cols-1 lg:mt-24 lg:-ml-0 lg:w-auto lg:grid-cols-2"
  >
    <div
      class="left order-2 mt-8 grid place-content-center px-[2.25px] lg:order-1 lg:mt-0 lg:px-0"
    >
      <h3
        class="px-4 text-center text-base leading-8 lg:px-8 lg:text-2xl lg:leading-10"
      >
        {{ t("yourSuccess") }}
      </h3>
      <p class="peran-kami-produsen-kostum-badut-maskot px-4 text-left lg:px-8">
        {{ t("brandMarketingIsImportant") }}
      </p>
    </div>
    <div class="right order-1 lg:order-2">
      <img
        cdn="storyblok"
        class="rounded-none lg:rounded-tr-lg"
        loading="lazy"
        src="https://a.storyblok.com/f/118728/973x903/647fab1977/all-grab-mascots-gradient.jpg"
        alt="all grab mascots"
        width="622"
        height="578"
        sizes="xs:320px"
        :placeholder="[100, 100, 10]"
      />
    </div>
  </div>
</template>
