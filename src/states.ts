import { atom } from "nanostores";
import { useDark } from "@vueuse/core";

export const isDark = atom(
  useDark({
    selector: "html",
    attribute: "data-theme",
    valueDark: "dark",
    valueLight: "light",
  })
);
export const mainMenu = atom(false);
