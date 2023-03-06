import { atom } from "nanostores";
import { useDark } from "@vueuse/core";
import type { Menu } from "@src/menu";

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
export const menus = atom(new Array<Menu>());
export const inheritLocale = atom("");
