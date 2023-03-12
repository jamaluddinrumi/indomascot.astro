<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { Image } from "@unpic/vue";
import { startCase } from "lodash-es";

const { t } = useI18n();
</script>

<template>
  <div
    id="visi-misi"
    class="grid w-screen grid-cols-1 lg:mt-24 lg:-ml-0 lg:w-auto lg:grid-cols-2"
  >
    <div
      class="left order-2 mt-8 grid place-content-center px-[2.25px] lg:order-1 lg:mt-0 lg:px-0"
    >
      <h3
        id="misi-kami"
        class="px-4 text-center text-xl font-semibold leading-8 text-idm-title lg:px-8 lg:text-3xl lg:leading-10"
      >
        {{ t("yourSuccess") }}
      </h3>
      <i18n-t
        id="peran-kami-produsen-kostum-badut-maskot"
        scope="global"
        keypath="brandMarketingIsImportant"
        tag="p"
        class="mt-2 px-4 text-left leading-loose lg:mt-4 lg:px-8"
      >
        <template #marketing>
          <span class="italic">
            {{ startCase(t("marketing")) }}
          </span>
        </template>
        <template #challenging>
          <span class="italic">
            {{ t("challenging") }}
          </span>
        </template>
        <template #eventMarketing>
          <span class="italic">
            {{ t("eventMarketing") }}
          </span>
        </template>
      </i18n-t>
    </div>
    <div class="right relative order-1 lg:order-2">
      <div
        class="absolute z-10 h-full w-full overflow-hidden bg-fuchsia-400/30 blur-3xl lg:block"
      />
      <Image
        cdn="storyblok"
        class="relative z-20 lg:rounded-xl lg:rounded-tr-lg lg:border-4 lg:border-idm-title"
        loading="lazy"
        src="https://a.storyblok.com/f/118728/973x903/647fab1977/all-grab-mascots-gradient.jpg/m/576x513"
        alt="all grab mascots"
        width="576"
        height="513"
        sizes="xs:320px"
        background="auto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #peran-kami-produsen-kostum-badut-maskot {
    @apply opacity-80;
  }
}
</style>
