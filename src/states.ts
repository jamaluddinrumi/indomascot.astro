import { atom } from "nanostores";
import { useDark } from "@vueuse/core";

export type menu = {
  href: String;
  text: String;
};

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
export const menus = atom(new Array<menu>());
export const inheritLocale = atom("");
export const url = atom(new URL("https://www.indomascot.com"));
