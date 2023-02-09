<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { i18n } from "/src/pages/_app.ts";

const localeChanger = ref(null);

localeChanger.value = i18n.global.locale;
</script>

<template>
  <div id="locale-changer">
    <select ref="localeChanger" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
    {{ $t("title") }}
  </div>
</template>
