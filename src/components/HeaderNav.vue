<script setup lang="ts"></script>

<template>
  <div id="top-bar-menu" class="top-bar flex-nowrap bg-transparent">
    <div class="top-bar-left float-left basis-auto">
      <ul class="menu bg-transparent">
        <li class="mb-0 flex">
          <a
            href="/"
            class="custom-logo-link pl-0"
            rel="home"
            aria-current="page"
          >
            <img
              preload
              provider="storyblok"
              width="188"
              height="32"
              src="https://a.storyblok.com/f/118728/x/f4143cbdbe/indomascot_logo.svg"
              class="custom-logo"
              alt="indomascot logo"
            />
          </a>
          <template v-if="getRouteBaseName() !== 'index'">
            <div
              class="hide-for-small-only mt-0 font-light leading-8 text-slate-600 lg:mt-[.65rem]"
            >
              {{ $t("title") }}
            </div>
          </template>
        </li>
      </ul>
    </div>
    <div
      class="top-bar-right flex-nowrap-right show-for-medium basis-auto bg-transparent"
    >
      <div class="flex items-center justify-end">
        <div class="z-10 mr-4 flex justify-between">
          <a
            :to="switchLocalePath('id')"
            class="item mr-2 text-indomascot-old-blue no-underline hover:text-indomascot-blue focus:text-indomascot-blue"
            :class="[{ 'opacity-50': $i18n.locale === 'en' }]"
          >
            <span class="josefin-sans inline-block align-middle font-bold"
              >ID</span
            ><span class="ml-0.5 inline-block align-middle">
              <IconFlagId />
            </span>
          </a>
          <a
            :to="switchLocalePath('en')"
            class="item text-indomascot-old-blue no-underline hover:text-indomascot-blue focus:text-indomascot-blue"
            :class="[{ 'opacity-50': $i18n.locale === 'id' }]"
          >
            <span class="josefin-sans inline-block align-middle font-bold">
              EN
            </span>
            <span class="align-middleml-0.5 inline-block">
              <IconFlagEn />
            </span>
          </a>
        </div>

        <button
          aria-controls="main-menu"
          class="hidden rounded-none shadow-none hover:cursor-pointer lg:block"
          @click="jQuery('#main-menu').foundation('open')"
        >
          <HeaderHamburger />
        </button>
      </div>
    </div>
    <div
      class="top-bar-right flex-nowrap-right show-for-small-only float-right basis-auto bg-transparent"
    >
      <button
        data-open="main-menu"
        aria-controls="main-menu"
        class="rounded-none shadow-none"
      >
        <HeaderHamburger />
      </button>
    </div>
  </div>
</template>
