<template>
  <div
    class="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center overflow-hidden"
  >
    <div class="flex w-[108rem] flex-none justify-end">
      <picture id="flashy-light">
        <source
          srcset="
            https://a.storyblok.com/f/118728/x/792c6617ba/new-flashy-light.avif
          "
          type="image/avif"
        />
        <img
          provider="storyblok"
          src="https://a.storyblok.com/f/118728/2296x668/ade06609f7/new-flashy-light.png/m/"
          alt="dark flashy background"
          class="w-[71.75rem] max-w-none flex-none"
          sizes="xs:414px lg:1280px"
          placeholder="true"
          decoding="async"
        />
      </picture>
      <picture id="flashy-dark">
        <source
          srcset="
            https://a.storyblok.com/f/118728/x/15eeb90ec2/new-flashy-dark.avif
          "
          type="image/avif"
        />
        <img
          provider="storyblok"
          src="https://a.storyblok.com/f/118728/2880x1232/60cf2ac49f/new-flashy-dark.png/m/"
          alt="dark flashy background"
          class="w-[90rem] max-w-none flex-none"
          sizes="xs:414px lg:1280px"
          placeholder="true"
          decoding="async"
        />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[data-theme="dark"] picture#flashy-light {
  display: none;
}
[data-theme="light"] picture#flashy-dark {
  display: none;
}
</style>
