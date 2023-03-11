import { atom } from "nanostores";
import type { Menu } from "@src/menu";

export const mainMenu = atom(false);
export const menus = atom(new Array<Menu>());
export const inheritLocale = atom("");
export const lightbox = atom(false);
export const slide = atom(0);
export const lightboxPortfolio = atom(false);
export const lightboxSlidePortfolio = atom(0);
export const lightboxLatest = atom(false);
export const lightboxSlideLatest = atom(0);
