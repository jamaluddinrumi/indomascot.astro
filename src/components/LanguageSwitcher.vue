<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const localeChanger = ref("");

const i18n = useI18n();

localeChanger.value = i18n.locale;
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
