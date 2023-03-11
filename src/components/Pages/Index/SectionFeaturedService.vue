<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import type { Ref } from "vue";
import { useI18n } from "vue-i18n";
import { Image } from "@unpic/vue";

const { t } = useI18n();

const keunggulanBahan: Ref<HTMLElement | undefined | null> = ref();
const keunggulanWaktu: Ref<HTMLElement | undefined | null> = ref();
const keunggulanMasker: Ref<HTMLElement | undefined | null> = ref();
const showKeunggulanMasker = ref(false);
const showKeunggulanWaktu = ref(false);
const showKeunggulanBahan = ref(false);
const intersectionOptions: Ref<IntersectionObserverInit | undefined> = ref();
const observer: Ref<IntersectionObserver | undefined> = ref();
const benang = ref({
  duration: Math.floor(Math.random() * 1000) + 3000,
  delay: Math.floor(Math.random() * 1000) + 200,
});
const speedometer = ref({
  duration: Math.floor(Math.random() * 1000) + 3000,
  delay: Math.floor(Math.random() * 1000) + 200,
});
const kipasMasker = ref({
  duration: Math.floor(Math.random() * 1000) + 3000,
  delay: Math.floor(Math.random() * 1000) + 200,
});

onMounted(() => {
  nextTick(() => {
    keunggulanBahan.value = document.getElementById("keunggulan-bahan");
    keunggulanWaktu.value = document.getElementById("keunggulan-waktu");
    keunggulanMasker.value = document.getElementById("keunggulan-masker");

    observer.value = new IntersectionObserver(
      onIntersecting,
      intersectionOptions.value
    );
    observer.value.observe(<Element>keunggulanBahan.value);
    observer.value.observe(<Element>keunggulanWaktu.value);
    observer.value.observe(<Element>keunggulanMasker.value);
  });
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});

function onIntersecting(
  entries: Array<IntersectionObserverEntry>,
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.target.id === "keunggulan-bahan") {
      if (entry.isIntersecting) {
        showKeunggulanBahan.value = true;
        observer.unobserve(entry.target);
      }
    }
    if (entry.target.id === "keunggulan-waktu") {
      if (entry.isIntersecting) {
        showKeunggulanWaktu.value = true;
        observer.unobserve(entry.target);
      }
    }
    if (entry.target.id === "keunggulan-masker") {
      if (entry.isIntersecting) {
        showKeunggulanMasker.value = true;
        observer.unobserve(entry.target);
      }
    }
  });
}
</script>

<template>
  <div class="mt-0 lg:mt-20">
    <div
      class="mt-0 grid w-screen grid-cols-1 overflow-hidden lg:w-auto lg:grid-cols-2"
    >
      <div
        id="keunggulan-bahan"
        class="left will-change-[opacity, transform] mt-8 px-[2.25px] transition delay-200 duration-700 ease-out lg:mt-0 lg:px-0"
        :class="[
          showKeunggulanBahan
            ? 'opacity-1 -translate-x-0'
            : '-translate-x-full opacity-0',
        ]"
      >
        <figure
          id="benang"
          :style="
            showKeunggulanBahan
              ? `--benang-duration: ${benang.duration}ms; --benang-delay: ${benang.delay}ms;`
              : ''
          "
          :class="{ levitate: showKeunggulanBahan }"
          class="my-0 mx-auto text-center"
        >
          <Image
            cdn="storyblok"
            src="https://a.storyblok.com/f/118728/655x553/d2c574ed1e/benang.png"
            width="655"
            height="553"
            sizes="xs:275px lg:588px"
            :alt="t('qualityMaterial')"
          />
        </figure>
      </div>
      <div class="right">
        <figure class="oval-hijau mb-6 hidden lg:block">
          <Image
            cdn="storyblok"
            src="https://a.storyblok.com/f/118728/80x80/1c4cdf35dd/oval-hijau.png"
            width="80"
            height="80"
            sizes="xs:80px lg:80px"
            alt="oval hijau"
            background="auto"
          />
        </figure>
        <h3 class="mb-2 text-center lg:mb-6 lg:text-left">
          <span
            class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl"
          >
            {{ t("qualityMaterial") }}
          </span>
        </h3>
        <i18n-t
          scope="global"
          keypath="toSatisfy"
          tag="p"
          class="description px-4 text-left leading-loose lg:px-0"
        >
          <template #firstGrade> 1<sup class="-ml-0.5"> st </sup> </template>
          <template #velboa>
            <span class="italic">
              {{ t("velboa") }}
            </span>
          </template>
          <template #drill>
            <span class="italic">
              {{ t("drill") }}
            </span>
          </template>
          <template #lotto>
            <span class="italic">
              {{ t("lotto") }}
            </span>
          </template>
          <template #furing>
            <span class="italic">
              {{ t("furing") }}
            </span>
          </template>
        </i18n-t>
      </div>
    </div>
    <div
      class="mt-6 grid w-screen grid-cols-1 overflow-hidden lg:mt-0 lg:w-auto lg:grid-cols-2"
    >
      <div class="left order-2">
        <figure class="oval-orange mb-6 hidden lg:block">
          <Image
            cdn="storyblok"
            src="https://a.storyblok.com/f/118728/80x80/0ad0820472/oval-orange.png"
            width="80"
            height="80"
            sizes="xs:80px lg:80px"
            alt="oval orange"
            background="auto"
          />
        </figure>
        <h3 class="mb-2 text-center lg:mb-6 lg:text-left">
          <span
            class="bg-gradient-to-r from-[#f6a600] via-[#0081fc] to-[#F04649] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl"
            >{{ t("fast") }}</span
          >
        </h3>
        <p class="description px-4 text-left leading-loose lg:px-0">
          {{ t("inOurProcess") }}<sup>*</sup>
        </p>
      </div>
      <div
        id="keunggulan-waktu"
        class="wp-block-column gambar-unggulan order-1 justify-center lg:order-2"
      >
        <div
          class="gambar-speedo will-change-[opacity, transform] mb-0 transition delay-200 duration-700 ease-out"
          :class="[
            showKeunggulanWaktu
              ? 'opacity-1 translate-x-0'
              : 'translate-x-full opacity-0',
          ]"
        >
          <figure
            id="speedometer"
            :style="
              showKeunggulanWaktu
                ? `--speedometer-duration: ${speedometer.duration}ms; --speedometer-delay: ${speedometer.delay}ms;`
                : ''
            "
            :class="{ levitate: showKeunggulanWaktu }"
            class="my-0 mx-auto text-center"
          >
            <Image
              cdn="storyblok"
              src="https://a.storyblok.com/f/118728/635x469/632db168bb/speedometer.png"
              width="635"
              height="469"
              sizes="xs:275px lg:588px"
              :alt="t('fast')"
            />
          </figure>
        </div>
      </div>
    </div>
    <div
      class="mt-0 grid w-screen grid-cols-1 overflow-hidden lg:mt-8 lg:w-auto lg:grid-cols-2"
    >
      <div
        id="keunggulan-masker"
        class="left will-change-[opacity, transform] mt-8 px-[2.25px] transition delay-200 duration-700 ease-out lg:mt-0 lg:px-0"
        :class="[
          showKeunggulanMasker
            ? 'opacity-1 -translate-x-0'
            : '-translate-x-full opacity-0',
        ]"
      >
        <figure
          id="kipas-masker"
          :style="
            showKeunggulanMasker
              ? `--kipas-masker-duration: ${kipasMasker.duration}ms; --kipas-masker-delay: ${kipasMasker.delay}ms`
              : ''
          "
          :class="{ levitate: showKeunggulanMasker }"
          class="mx-auto my-0 text-center"
        >
          <Image
            cdn="storyblok"
            src="https://a.storyblok.com/f/118728/580x430/21e6d6fb2c/kipas-angin.png"
            width="580"
            height="430"
            sizes="xs:275px lg:580px"
            :alt="t('freeBonusHeadFanAndMask')"
          />
        </figure>
      </div>
      <div class="right">
        <figure class="oval-merah mb-6 hidden lg:block">
          <Image
            cdn="storyblok"
            src="https://a.storyblok.com/f/118728/80x80/b3923b406c/oval-merah.png"
            width="80"
            height="80"
            sizes="xs:80px lg:80px"
            alt="oval merah"
            background="auto"
          />
        </figure>
        <h3 class="mb-2 text-center lg:mb-6 lg:text-left">
          <span
            class="bg-gradient-to-r from-[#16bc54] via-[#00a4fc] to-[#4fb8fe] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl"
            >{{ t("freeBonusHeadFanAndMask") }}</span
          >
        </h3>
        <i18n-t
          scope="global"
          keypath="performerIsSweating"
          tag="p"
          class="description px-4 text-left leading-loose lg:px-0"
        >
          <template #performer>
            <span class="italic">Performer</span>
          </template>
        </i18n-t>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes levitate {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-15px);
  }

  100% {
    transform: translatey(0px);
  }
}

.levitate {
  transform: translatey(0px);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: levitate;
}

#benang {
  animation-duration: var(--benang-duration);
  animation-delay: var(--benang-delay);
}

#speedometer {
  animation-duration: var(--speedometer-duration);
  animation-delay: var(--speedometer-delay);
}

#kipas-masker {
  animation-duration: var(--kipas-masker-duration);
  animation-delay: var(--kipas-masker-delay);
}

@-webkit-keyframes levitate {
  0% {
    -webkit-transform: translateY(-25px);
  }

  50% {
    -webkit-transform: translateY(0px);
  }

  100% {
    -webkit-transform: translateY(-25px);
  }
}
</style>
