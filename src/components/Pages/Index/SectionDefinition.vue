<script lang="ts" setup>
import { onMounted, nextTick, ref } from "vue";
import { useI18n } from "vue-i18n";
import menus from "@src/menu";

const portfolioLink = ref(menus.find((item) => item.text === "portfolio").href);

const { t } = useI18n();

const paragraphs = ref([
  {
    title: "whatIsMascotCostume",
    answer: "accordingToWikipedia",
  },
  {
    title: "whatIsTheDifferent",
    answer: "itsJustTheSame",
  },
  {
    title: "theSamples",
    answer: "youCanSeeTheSamples",
  },
]);

onMounted(() => {
  nextTick(() => {
    const video = ref(document.getElementById("inilahmaskot"));
    video.value.addEventListener("ended", function () {
      const v = video.value.currentSrc;
      video.value.src = "";
      video.value.src = v;
    });
  });
});
</script>

<template>
  <section
    id="definisi"
    class="definisi mt-14 grid grid-cols-1 gap-4 overflow-hidden border p-4 text-center lg:mt-16 lg:grid-cols-2 lg:rounded-2xl lg:p-20"
  >
    <div id="left relative">
      <div
        id="video-bg-blur"
        class="absolute overflow-hidden bg-small-title/30 blur-3xl lg:block lg:h-[847px] lg:w-[480px]"
      ></div>
      <video
        id="inilahmaskot"
        preload="true"
        controls
        width="480"
        class="mx-auto mt-0.5 rounded-lg border-4 border-small-title shadow-inner lg:relative lg:mt-0"
        poster="https://a.storyblok.com/f/118728/720x1280/7cec6db713/maskot-roti-kapiten-sedang-nongkrong-di-depan-outlet.jpeg/m/480x854"
      >
        <source
          src="https://a.storyblok.com/f/118728/x/432b9373b9/roti-kapiten-show-off.mp4"
          type="video/mp4"
        />
        <a
          href="https://a.storyblok.com/f/118728/x/432b9373b9/roti-kapiten-show-off.mp4"
          target="_blank"
          >Download Video</a
        >
      </video>
      <div class="mx-auto mt-2">
        <span class="text-light text-xs italic text-opacity-50"
          >{{ t("designBy") }} Roti Kapiten</span
        >
      </div>
    </div>

    <div id="right" class="p-2">
      <template v-for="(paragraph, index) in paragraphs" :key="index">
        <h2
          class="question mx-auto mt-8 text-center text-[1.15rem] font-semibold leading-[1.75rem] lg:mt-10 lg:text-[1.75rem] lg:leading-[3rem] lg:first:mt-0"
        >
          {{ t(paragraph.title) }}
        </h2>
        <template v-if="paragraph.answer === 'youCanSeeTheSamples'">
          <i18n-t
            keypath="youCanSeeTheSamples"
            tag="p"
            class="answer mb-4 text-left leading-loose lg:mb-0"
          >
            <a
              class="link-accent link hover:text-accent"
              :href="portfolioLink"
              >{{ $t("portfolioPage") }}</a
            >
          </i18n-t>
        </template>
        <template v-else>
          <p class="answer text-left leading-loose">
            {{ t(paragraph.answer) }}
          </p>
        </template>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  .question {
    @apply text-small-title;
  }
  #definisi {
    border-color: rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.1);
    .answer {
      @apply text-idm-base-100;
    }
  }
}

[data-theme="light"] {
  .question {
    @apply text-small-title-darken;
  }
  #definisi {
    border-color: rgba(82, 41, 122, 0.05);
    background-color: rgba(82, 41, 122, 0.1);
    .answer {
      @apply text-idm-base-300;
    }
  }
}
</style>
