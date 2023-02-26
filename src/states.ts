import { atom } from "nanostores";
import { useDark } from "@vueuse/core";

export const isDark = atom(
  useDark({
    selector: "html",
    attribute: "data-theme",
    valueDark: "dark",
    valueLight: "light",
    storageKey: "vueuse-color-scheme",
  })
);
export const mainMenu = atom(false);
export const inheritLocale = atom("");
export const url = atom(new URL("https://www.indomascot.com"));
