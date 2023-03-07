<script setup lang="ts">
import { Image as UnpicImage } from "@unpic/vue";
import Moveable, { VueMoveableInstance } from "vue3-moveable";
import $device from "@src/device";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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
  <div class="relative mx-auto mt-20 mb-4 w-fit lg:mt-32 lg:mb-8">
    <div
      id="bg-blur"
      class="absolute bg-gradient-to-t from-indigo-300 to-idm-title opacity-30 blur-lg"
      :class="[
        $device.isDesktopOrTablet ? 'h-[40px] w-[157px]' : 'h-[24px] w-[97px]',
      ]"
    ></div>
    <h2 id="portfolio-title" class="relative mb-6 lg:mb-0">
      <span
        id="title-text"
        class="text-[1.5rem] font-bold uppercase leading-8 text-idm-title lg:text-[2.5rem] lg:font-semibold lg:leading-[3rem]"
      >
        {{ t("fitting") }}
      </span>
    </h2>
  </div>
  <section id="fitting" class="mt-4 px-2">
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
            src="https://a.storyblok.com/f/118728/1564x1584/0a5e1806bb/mascot-costume-proportional-design-guide.png/m/275x275"
            class="w-60 text-center"
            alt="panduan tubuh manusia yang proporsional"
          />
          <div class="absolute top-0 left-0">
            <canvas id="target" ref="target" class="target" />
            <Moveable
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
        <div class="my-8 grid grid-cols-1 lg:mt-12">
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
            src="https://a.storyblok.com/f/118728/782x793/604d6a7a85/uniku-fitting-is-passed.png/m/281x281"
            alt="contoh desain maskot yang tidak proporsional dengan tubuh manusia"
          />
          <UnpicImage
            cdn="storyblok"
            loading="lazy"
            width="281"
            height="281"
            sizes="sm:133px lg:281px"
            src="https://a.storyblok.com/f/118728/782x793/3c893e1395/zeze-fitting-is-not-passed.png/m/281x281"
            alt="contoh desain maskot yang tidak proporsional dengan tubuh manusia"
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
      @apply text-idm-title text-opacity-0;
    }
  }
}

[data-theme="light"] {
  #title-text {
    @apply mix-blend-multiply;
  }
  #instructions {
    .icon {
      @apply text-primary text-opacity-70;
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
