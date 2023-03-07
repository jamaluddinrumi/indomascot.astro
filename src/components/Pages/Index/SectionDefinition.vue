<script lang="ts" setup>
import { onMounted, nextTick, ref } from "vue";
import { useI18n } from "vue-i18n";
import type { Menu } from "@src/menu";

const props = defineProps({
  menus: {
    type: Array<Menu>,
    default: new Array<Menu>(),
  },
});

const portfolio: Menu = props.menus.find(
  (item: Menu) => item.text === "portfolio"
);

const portfolioLink = portfolio.href;

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
    class="definisi mt-14 grid grid-cols-1 gap-4 p-2 overflow-hidden border text-center lg:mt-16 lg:grid-cols-2 lg:rounded-2xl lg:p-20"
  >
    <div id="left relative">
      <div
        id="video-bg-blur"
        class="bg-idm-title/30 absolute overflow-hidden blur-3xl lg:block lg:h-[847px] lg:w-[480px]"
      ></div>
      <video
        id="inilahmaskot"
        preload="true"
        controls
        width="480"
        class="mx-auto mt-0.5 rounded-lg border-4 border-idm-title shadow-inner lg:relative lg:mt-0"
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
          class="question mx-auto mt-8 text-center text-[1.15rem] font-semibold leading-[1.75rem] text-idm-title lg:mt-10 lg:text-[1.75rem] lg:leading-[3rem] lg:first:mt-0"
        >
          {{ t(paragraph.title) }}
        </h2>
        <template v-if="paragraph.answer === 'accordingToWikipedia'">
          <i18n-t
            scope="global"
            keypath="accordingToWikipedia"
            tag="p"
            class="answer mb-4 text-left leading-loose lg:mb-0"
          >
            <template #brandAwareness>
              <span class="italic">{{ t("brandAwareness") }}</span>
            </template>
          </i18n-t>
        </template>
        <template v-else-if="paragraph.answer === 'itsJustTheSame'">
          <i18n-t
            scope="global"
            keypath="itsJustTheSame"
            tag="p"
            class="answer mb-4 text-left leading-loose lg:mb-0"
          >
            <template #allSize>
              <span class="italic">{{ t("allSize") }}</span>
            </template>
          </i18n-t>
        </template>
        <template v-else-if="paragraph.answer === 'youCanSeeTheSamples'">
          <i18n-t
            scope="global"
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
  #definisi {
    border-color: rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
}

[data-theme="light"] {
  #definisi {
    border-color: rgba(82, 41, 122, 0.05);
    background-color: rgba(82, 41, 122, 0.1);
  }
}
</style>
