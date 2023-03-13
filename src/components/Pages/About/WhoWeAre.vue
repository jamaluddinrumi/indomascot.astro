<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Image } from "@unpic/vue";
import { menus } from "@src/states";
import { useStore } from "@nanostores/vue";
import type { Menu } from "@src/menu";
import Human from "@components/Icon/Human.vue";
import WhatsappButton from "@components/WhatsappButton.vue";
import LiteYoutube from "@components/LiteYoutube.vue";
import MenuOri from "@src/menu";

const useMenus = useStore(menus);

const portfolioTransKey = "portfolio";

const portfolioLink: Menu | undefined = useMenus.value.find(
  (item) => item.text === portfolioTransKey
);

const portfolioLinkOri: Menu | undefined = MenuOri.find(
  (item) => item.text === portfolioTransKey
);

const portfolioLinkHref =
  portfolioLink === undefined ? portfolioLinkOri?.href : portfolioLink.href;

const waUrl = import.meta.env.PUBLIC_WA_URL;
const youtubeWorkshopIdUrl = import.meta.env.PUBLIC_YOUTUBE_WORKSHOP_ID;

const { t, locale } = useI18n();
</script>

<template>
  <header class="relative mx-auto mt-8 w-fit lg:mt-12">
    <div
      class="absolute h-full w-full bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
    />
    <h1
      ref="pageTitle"
      id="page-title"
      class="text-center text-lg font-bold uppercase lg:text-4xl"
    >
      {{ t("aboutUs") }}
    </h1>
  </header>
  <section class="prose mx-auto mt-4 px-4 lg:mt-12">
    <div class="relative flex justify-center">
      <div
        class="absolute h-full w-full overflow-hidden bg-fuchsia-400/30 blur-3xl lg:block"
      />
      <Image
        id="workshop-boneka-maskot-besar-indomascot-bandung"
        provider="storyblok"
        src="https://a.storyblok.com/f/118728/900x1200/ebd4e7dd5a/workshop-kostum-maskot-boneka-besar-indomascot-bandung.jpg"
        alt="workshop-boneka-maskot-besar-indomascot-bandung"
        width="450"
        height="600"
        sizes="xs:275px lg:450px"
        class="relative my-0 border-4 border-idm-title shadow-inner"
        background="auto"
        layout="constrained"
      />
    </div>
    <p class="has-text-align-left">
      {{ t("aboutUsParagraph.p1") }}
    </p>
    <p class="has-text-align-left">
      {{ t("aboutUsParagraph.p2") }}
    </p>
    <i18n-t keypath="aboutUsParagraph.p3" scope="global" tag="p">
      <template #potentialCustomer>
        <span class="italic">
          {{ t("potentialCustomer") }}
        </span>
      </template>
    </i18n-t>
    <i18n-t keypath="aboutUsParagraph.p4" scope="global" tag="p">
      <template #potentialCustomer>
        <span class="italic">
          {{ t("potentialCustomer") }}
        </span>
      </template>
    </i18n-t>
    <p>
      {{ t("aboutUsParagraph.p5") }}
    </p>
    <p>
      {{ t("aboutUsParagraph.p6") }}
    </p>
    <div class="relative">
      <div
        class="absolute h-full w-full overflow-hidden bg-fuchsia-400/30 blur-3xl lg:block"
      />
      <lite-youtube
        class="relative mx-auto border-4 border-idm-title shadow-inner"
        style="
          background-image: url('https://a.storyblok.com/f/118728/480x360/dd682a5d78/hqdefault.jpg/m/');
        "
        :videoid="youtubeWorkshopIdUrl"
        :playlabel="t('workshopAmbiance')"
        params="controls=1&modestbranding=2&rel=0&enablejsapi=1&autoplay=1"
      />
    </div>
    <div class="wp-block-columns has-2-columns">
      <div class="wp-block-column">
        <p>
          {{ t("ifThereIsSomethingElse") }}
          <a
            id="whatsapp-link-text"
            target="_blank"
            :href="waUrl"
            class="no-underline"
          >
            <font-awesome-layers class="fa-fw">
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                aria-hidden="true"
              />
            </font-awesome-layers>
            <span class="ml-0.5">WhatsApp</span>
          </a>
          <br />
        </p>
        <div class="flex justify-center">
          <whatsapp-button />
        </div>
      </div>
      <p class="mt-10 text-center">
        {{ t("ourPostalAddress") }}
      </p>
      <address class="text-center leading-loose">
        Jl. Cukang Kawung Gang Bojong Mekar No. 53 RT 1 RW 15 <br />
        Cibeunying Kaler, Kec. Cimenyan, Bandung, Jawa Barat 40191
      </address>
    </div>
    <div class="relative">
      <div
        class="absolute h-full w-full overflow-hidden bg-fuchsia-400/30 blur-3xl lg:block"
      />
      <div class="relative mt-4 border-4 border-idm-title shadow-inner lg:mt-8">
        <iframe
          :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0295961254546!2d107.6340594147727!3d-6.887058395023372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70924a12e53%3A0x601a9d4dc870588d!2sIndomascot!5e0!3m2!1sen!2sid!4v1625486210172!5m2!1sen!2sid&region=${locale}&language=${locale}`"
          width="100%"
          height="480px"
          style="border: 0"
          allowfullscreen="false"
          frameborder="0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
  <div class="h-12" aria-hidden="true" />
  <div class="flex justify-center">
    <a
      class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide shadow-2xl"
      :href="portfolioLinkHref"
      :aria-label="t(portfolioTransKey)"
    >
      <div class="fa-fw fa-layers">
        <Human />
      </div>
      <span
        class="ml-0 mr-0.5 text-xs font-bold uppercase leading-normal text-neutral-content lg:ml-0.5 lg:text-base"
      >
        {{ $t("portfolio") }}
      </span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #whatsapp-link-text {
    @apply text-whatsapp-green;
  }
}

[data-theme="light"] {
  #whatsapp-link-text {
    @apply text-whatsapp-old-green;
  }
}
</style>
