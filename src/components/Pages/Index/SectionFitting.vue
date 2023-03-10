<script setup lang="ts">
import { Image as UnpicImage } from "@unpic/vue";
import Moveable from "vue3-moveable";
import $device from "@src/device";
import { useDark } from "@vueuse/core";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const isDark = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const fittingImages = {
  proportionalHumanBodyGuide: {
    dark: "https://a.storyblok.com/f/118728/275x275/237f619670/mascot-costume-proportional-design-guide-white.png",
    light:
      "https://a.storyblok.com/f/118728/1564x1584/0a5e1806bb/mascot-costume-proportional-design-guide.png",
  },
  passesFittingGuide: {
    dark: "https://a.storyblok.com/f/118728/281x281/3704feab47/uniku-fitting-is-passed-white.png",
    light:
      "https://a.storyblok.com/f/118728/782x793/604d6a7a85/uniku-fitting-is-passed.png",
  },
  notPassesFittingGuide: {
    dark: "https://a.storyblok.com/f/118728/281x281/1f0b2f6488/zeze-fitting-is-not-passed-white.png",
    light:
      "https://a.storyblok.com/f/118728/782x793/3c893e1395/zeze-fitting-is-not-passed.png",
  },
};

const target = ref(null);

function handleDrag({ target, transform }) {
  target.style.transform = transform;
}
function handleResize({ target, width, height }) {
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
}
function handleScale({ target, transform }) {
  target.style.transform = transform;
}
function handleRotate({ target, transform }) {
  target.style.transform = transform;
}
function handleWarp({ target, transform }) {
  target.style.transform = transform;
}

function updateCanvasImage(e) {
  const files = e.target.files;

  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();
    img.onload = function () {
      drawCanvasImage(img);
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(files[0]);
}

function drawCanvasImage(img) {
  const canvas = target.value;
  canvas.width = 200;
  canvas.height = 200;

  const ctx = canvas.getContext("2d");
  ctx.globalAlpha = 0.666;
  ctx.drawImage(img, 0, 0, 200, 200);
}
</script>

<template>
  <div
    id="fitting-title"
    class="relative mx-auto mt-20 mb-4 w-fit lg:mt-32 lg:mb-12"
  >
    <div
      id="bg-blur"
      class="absolute h-full w-full bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
    />
    <h2 class="relative mb-6 lg:mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-bold uppercase leading-8 text-idm-title lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem]"
      >
        {{ t("fitting") }}
      </span>
    </h2>
  </div>
  <section id="fitting" class="overflow-hidden p-4 lg:mb-20 lg:p-0">
    <div class="grid grid-cols-1 gap-0 px-0 lg:grid-cols-2 lg:px-8">
      <div
        class="order-2 mt-4 flex flex-col justify-self-center lg:order-1 lg:mt-0"
      >
        <div class="relative mt-4 flex justify-center lg:mt-0">
          <UnpicImage
            cdn="storyblok"
            loading="lazy"
            width="275"
            height="275"
            sizes="sm:275px lg:275px"
            :src="fittingImages.proportionalHumanBodyGuide[theme]"
            class="w-60 text-center"
            :alt="t('proportionalHumanBodyGuide')"
          />
          <div class="-left-1/5 absolute top-1/4">
            <canvas id="target" ref="target" class="target" />
            <Moveable
              id="moveable"
              class="moveable"
              :rotation-position="`none`"
              :target="['#target']"
              :pinchable="true"
              :use-resize-observer="true"
              :draggable="true"
              :scalable="true"
              :rotatable="true"
              :resizable="true"
              @drag="handleDrag"
              @scale="handleScale"
              @rotate="handleRotate"
              @resize="handleResize"
              @warp="handleWarp"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 lg:mt-12">
          <div class="flex justify-center">
            <label
              class="bg-gradient flex cursor-pointer justify-center rounded-full bg-primary px-6 py-4 uppercase tracking-wide text-neutral-content"
            >
              <font-awesome-icon
                :icon="['fas', 'cloud-upload-alt']"
                aria-hidden="true"
                class="h-4 w-4 fill-neutral-content/90 text-neutral-content/90 lg:mt-1 lg:h-5 lg:w-5"
              />
              <span
                class="ml-1 mr-0.5 text-xs font-bold uppercase leading-normal lg:ml-2 lg:text-base"
              >
                {{ $t("uploadDesign") }}
              </span>
              <input type="file" class="hidden" @change="updateCanvasImage" />
            </label>
          </div>
        </div>
      </div>
      <!-- uploader -->
      <div class="grid-rows-fr order-1 mt-0 grid gap-4 lg:order-2">
        <div class="grid max-w-lg grid-cols-2 place-content-start gap-2">
          <UnpicImage
            cdn="storyblok"
            loading="lazy"
            width="281"
            height="281"
            sizes="sm:133px lg:281px"
            :src="fittingImages.passesFittingGuide[theme]"
            :alt="t('passesFittingGuide')"
          />
          <UnpicImage
            cdn="storyblok"
            loading="lazy"
            width="281"
            height="281"
            sizes="sm:133px lg:281px"
            :src="fittingImages.notPassesFittingGuide[theme]"
            :alt="t('notPassesFittingGuide')"
          />
        </div>
        <div class="mt-4 lg:mt-0">
          <ul id="instructions" class="fa-ul">
            <li>
              <span class="fa-li">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              {{ $t("fittingInstruction.proportional") }}
              <span class="font-bold">{{ $t("proportional") }}</span>
            </li>
            <li>
              <span class="fa-li">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              {{ $t("fittingInstruction.upload.useButton") }}
              <span class="font-bold">{{ $t("uploadDesign") }}</span>
              {{
                $device.isMobile
                  ? $t("fittingInstruction.upload.below")
                  : $t("fittingInstruction.upload.beside")
              }}
            </li>
            <li>
              <span class="fa-li">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              <span class="font-bold">
                {{ $t("fittingInstruction.resizeDragRotate.useHandle") }}
              </span>
              {{ $t("fittingInstruction.resizeDragRotate.ifNeeded") }}
            </li>
            <li>
              <span class="fa-li">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  aria-hidden="true"
                  class="icon"
                />
              </span>
              <span class="font-bold">{{ $t("screenshot") }}</span>
              {{ $t("fittingInstruction.screenshot") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
[data-theme="dark"] {
  #title-text {
    @apply mix-blend-lighten;
  }
  #instructions {
    .icon {
      @apply text-idm-title;
    }
  }
}

[data-theme="light"] {
  #title-text {
    @apply mix-blend-multiply;
  }
  #instructions {
    .icon {
      @apply text-primary/70;
    }
  }
}

#instructions {
  --fa-li-margin: 1.5rem;
  @apply leading-relaxed;
}
li {
  margin-top: 0.5rem;
}
</style>

<style lang="scss">
[data-theme="dark"] {
  #moveable.moveable-control-box .moveable-line,
  #moveable.moveable-control-box .moveable-control {
    --moveable-color: hsl(var(--idm-title));
  }
}

[data-theme="light"] {
  #moveable.moveable-control-box .moveable-line,
  #moveable.moveable-control-box .moveable-control {
    --moveable-color: hsl(var(--p));
  }
}
</style>
