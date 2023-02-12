<script setup lang="ts">
import FooterApps from "@components/FooterApps.vue";
import FooterNav from "@components/FooterNav.vue";

const waNo = import.meta.env.PUBLIC_WA_NO;
const waUrl = import.meta.env.PUBLIC_WA_URL;
const emailAddress = import.meta.env.PUBLIC_EMAIL_ADDRESS;
const igUrl = import.meta.env.PUBLIC_IG_URL;
const youtubeUrl = import.meta.env.PUBLIC_YOUTUBE_URL;
const youtubeWorkshopId = import.meta.env.PUBLIC_YOUTUBE_WORKSHOP_ID;
const cibeunyingKaler = import.meta.env.PUBLIC_CIBEUNYING_KALER;
const googleBusinessUrl = import.meta.env.PUBLIC_GOOGLE_BUSINESS_URL;
</script>

<template>
  <footer
    class="container mx-auto border-t-neutral-content bg-repeat text-center text-base-content shadow-inner"
    role="contentinfo"
  >
    <div class="grid grid-cols-1 pb-4 lg:grid-cols-3 lg:pb-0">
      <div class="mt-16">
        <h4
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ $t("workshop") }}
        </h4>
        <address class="josefin-sans workshop leading-8">
          Jl. Cukang Kawung Gang Bojong Mekar
          <br />No. 53 RT 01 RW 15 Cibeunying Kaler, <br />Kec. Cimenyan,
          Bandung, <br />Jawa Barat 40191
        </address>
        <div class="josefin-sans mb-0 mt-2 leading-3">
          <font-awesome-icon
            class="mr-1"
            :icon="['fas', 'map-marker-alt']"
            aria-hidden="true"
          />
          <a :href="googleBusinessUrl" target="_blank" rel="noopener">
            <span class="bangers">INDOMASCOT</span>
          </a>
        </div>
        <p class="josefin-sans mt-2 italic underline">
          <a :href="googleBusinessUrl" target="_blank" rel="noopener">
            <span class="font-sans text-xs">
              {{ $t("seeAtGoogleMaps") }}
              <font-awesome-icon
                :icon="['fas', 'external-link-alt']"
                class="ml-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </p>
      </div>
      <div class="mt-16 pb-16 lg:pb-0">
        <h4
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ $t("contact") }}
        </h4>
        <div class="mx-auto w-fit">
          <ul class="fa-ul w-fit">
            <li class="mb-3 w-fit">
              <font-awesome-layers class="fa-fw fa-li mr-1 !h-6">
                <font-awesome-icon
                  class=""
                  :icon="['fab', 'whatsapp']"
                  aria-hidden="true"
                />
              </font-awesome-layers>
              <a
                class="josefin-sans"
                :href="waUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="kontak whatsapp"
                >{{ waNo }}</a
              >
            </li>
            <li class="mb-3 w-fit">
              <font-awesome-layers class="fa-fw fa-li mr-1 !h-6">
                <font-awesome-icon
                  class=""
                  :icon="['fas', 'envelope']"
                  aria-hidden="true"
                />
              </font-awesome-layers>
              <a
                class="josefin-sans"
                :href="`mailto:${emailAddress}`"
                target="_blank"
                rel="noopener noreferrer"
                alt="kontak email"
                >{{ emailAddress }}</a
              >
            </li>
            <li class="mb-3 w-fit">
              <font-awesome-layers class="fa-fw fa-li mr-1 !h-6">
                <font-awesome-icon
                  class=""
                  :icon="['fab', 'instagram']"
                  aria-hidden="true"
                />
              </font-awesome-layers>
              <a
                :href="igUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="instagram"
              >
                <span class="bangers">INDOMASCOT</span>
              </a>
            </li>
            <li class="mb-3 w-fit">
              <font-awesome-layers class="fa-fw fa-li mr-1 !h-6">
                <font-awesome-icon
                  class=""
                  :icon="['fab', 'youtube']"
                  aria-hidden="true"
                />
              </font-awesome-layers>
              <a
                :href="youtubeUrl"
                target="_blank"
                rel="noopener noreferrer"
                alt="channel youtube"
              >
                <span class="bangers">INDOMASCOT</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-16 hidden lg:block">
        <h4
          class="widgettitle mb-8 text-[1.125rem] text-sm font-light uppercase lg:text-base"
        >
          {{ $t("apps") }}
        </h4>
        <FooterApps />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer .inner-footer > .cell:not(:last-child) {
  @apply pt-16;
}

footer .inner-footer > .cell:last-child {
  @apply pt-4 pb-8;
}
</style>
