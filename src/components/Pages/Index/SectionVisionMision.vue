<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { Image } from "@unpic/vue";

const { t } = useI18n();
</script>

<template>
  <div
    id="visi-misi"
    class="mt-10 grid w-screen grid-cols-1 lg:mt-24 lg:-ml-0 lg:w-auto lg:grid-cols-2"
  >
    <div
      class="left order-2 mt-8 grid place-content-center px-[2.25px] lg:order-1 lg:mt-0 lg:px-0"
    >
      <h3
        id="misi-kami"
        class="px-4 text-center text-xl font-semibold leading-8 lg:px-8 lg:text-3xl lg:leading-10"
      >
        {{ t("yourSuccess") }}
      </h3>
      <p
        id="peran-kami-produsen-kostum-badut-maskot"
        class="mt-2 px-4 text-left leading-loose lg:mt-4 lg:px-8"
      >
        {{ t("brandMarketingIsImportant") }}
      </p>
    </div>
    <div class="right order-1 lg:order-2">
      <Image
        cdn="storyblok"
        class="mt-2 lg:mt-0 lg:rounded-xl lg:rounded-tr-lg lg:border-4 lg:border-small-title lg:shadow-2xl lg:shadow-small-title/80"
        loading="lazy"
        src="https://a.storyblok.com/f/118728/973x903/647fab1977/all-grab-mascots-gradient.jpg"
        alt="all grab mascots"
        width="622"
        height="578"
        sizes="xs:320px"
        background="auto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="light"] {
  #misi-kami {
    @apply text-small-title-darken;
  }

  #peran-kami-produsen-kostum-badut-maskot {
    @apply text-idm-base-300;
  }
}

[data-theme="dark"] {
  #misi-kami {
    @apply text-small-title;
  }

  #peran-kami-produsen-kostum-badut-maskot {
    @apply text-idm-base-100/80;
  }
}
</style>
