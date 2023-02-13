<script lang="ts">
import { onMounted, nextTick, ref } from "vue";

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
  <div
    id="definisi"
    class="definisi mt-10 grid grid-cols-1 gap-4 rounded-2xl bg-indomascot-old-blue p-4 text-center text-white shadow-2xl lg:mt-20 lg:grid-cols-2 lg:p-20"
  >
    <div id="left">
      <video
        id="inilahmaskot"
        preload
        controls
        width="480"
        class="mx-auto mt-0.5 rounded-lg border-4 border-white shadow-inner lg:mt-0"
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
        <span class="text-light text-xs italic text-slate-100/50"
          >{{ $t("designBy") }} Roti Kapiten</span
        >
      </div>
    </div>

    <div id="right">
      <h2
        class="mx-auto my-4 text-center text-[1.15rem] font-semibold leading-[1.75rem] lg:mt-0 lg:text-[1.75rem] lg:leading-[3rem]"
      >
        {{ $t("whatIsMascotCostume") }}
      </h2>
      <p class="text-left">
        {{ $t("accordingToWikipedia") }}
      </p>
      <h2
        class="mx-auto mt-8 mb-4 text-center text-[1.15rem] font-semibold leading-[1.75rem] lg:mt-16 lg:mb-4 lg:text-[1.75rem] lg:leading-[3rem]"
      >
        {{ $t("whatIsTheDifferent") }}
      </h2>
      <p class="mb-0 text-left">
        {{ $t("itsJustTheSame") }}
      </p>
    </div>
  </div>
</template>
