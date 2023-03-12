const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const daisyUi = require("daisyui/src/colors/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'], // or 'media' or 'class'
  // darkMode: ['[data-theme="dark"]'],
  // darkMode: "media",
  theme: {
    screens: Object.fromEntries(
      Object.entries(defaultTheme.screens).filter(([key, value]) =>
        ["sm", "lg"].includes(key)
      )
    ),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "indomascot-yellow": "#e59700",
      "indomascot-blue": "#0033cc",
      "indomascot-old-blue": "#003399",
      "whatsapp-green": "#25d366",
      "whatsapp-old-green": "#128c7e",
      railway: "#8532CE",
      "idm-title": "hsl(var(--idm-title) / <alpha-value>)",
      "idm-base-100": "hsl(var(--idm-base-100) / <alpha-value>)",
      "idm-base-200": "hsl(var(--idm-base-200) / <alpha-value>)",
      "idm-base-300": "hsl(var(--idm-base-300) / <alpha-value>)",
      bca: "#4000a1",
      mandiri: "#003066",
      bni: "#f05921",
      bri: "#00529c",
      jenius: "#20a4dc",
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Josefin Sans", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
        text: "text 5s ease infinite",
        "spin-slow": "spin 1.5s linear infinite",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(7ch)" },
          "65%, 70%": { transform: "translateX(9ch)" },
          "75%, 80%": { transform: "translateX(12ch)" },
          "85%, 90%": { transform: "translateX(14ch)" },
          "95%, 100%": { transform: "translateX(15ch)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  daisyui: {
    darkTheme: false,
    themes: [
      {
        dark: {
          primary: "hsl(270, 60%, 52%)",
          "primary-focus": "#A667E4",
          "primary-content": daisyUi["[data-theme=dark]"]["primary-content"],
          secondary: "#878593",
          "secondary-focus": daisyUi["[data-theme=dark]"]["secondary-focus"],
          "secondary-content":
            daisyUi["[data-theme=dark]"]["secondary-content"],
          accent: daisyUi["[data-theme=dark]"]["accent"],
          "accent-focus": daisyUi["[data-theme=dark]"]["accent-focus"],
          "accent-content": daisyUi["[data-theme=dark]"]["accent-content"],
          neutral: daisyUi["[data-theme=dark]"]["neutral"],
          "neutral-focus": daisyUi["[data-theme=dark]"]["neutral-focus"],
          "neutral-content": "#FFFFFF",
          "base-100": daisyUi["[data-theme=dark]"]["base-100"],
          "base-200": daisyUi["[data-theme=dark]"]["base-200"],
          "base-300": daisyUi["[data-theme=dark]"]["base-300"],
          "base-content": "hsl(246,6%,95%)",
          info: daisyUi["[data-theme=dark]"]["info"],
          "info-content": daisyUi["[data-theme=dark]"]["info-content"],
          success: daisyUi["[data-theme=dark]"]["success"],
          "success-content": daisyUi["[data-theme=dark]"]["success-content"],
          warning: daisyUi["[data-theme=dark]"]["warning"],
          "warning-content": daisyUi["[data-theme=dark]"]["warning-content"],
          error: daisyUi["[data-theme=dark]"]["error"],
          "error-content": daisyUi["[data-theme=dark]"]["error-content"],
          ".bg-body": {
            "background-color": "#13111C",
          },
          ".bg-gradient": {
            "background-image":
              "linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)",
          },
          ".btn-gradient": {
            background:
              "linear-gradient(76.35deg, rgb(128, 26, 230) 15.89%, rgb(162, 26, 230) 89.75%)",
          },
          ".logo": {
            fill: "#FEFEFE",
            stroke: "#FEFEFE",
            color: "#FEFEFE",
          },
          "--idm-base-100": "246 6% 78%",
          "--idm-base-200": "246 6% 55%",
          "--idm-base-300": "246 8% 35%",
          "--idm-title": "270 70% 75%",
        },
      },
      {
        light: {
          primary: "hsl(270, 60%, 52%)",
          "primary-focus": "#A667E4",
          "primary-content": daisyUi["[data-theme=light]"]["primary-content"],
          secondary: "#878593",
          "secondary-focus": daisyUi["[data-theme=light]"]["secondary-focus"],
          "secondary-content":
            daisyUi["[data-theme=light]"]["secondary-content"],
          accent: daisyUi["[data-theme=light]"]["accent"],
          "accent-focus": daisyUi["[data-theme=light]"]["accent-focus"],
          "accent-content": daisyUi["[data-theme=light]"]["accent-content"],
          neutral: daisyUi["[data-theme=light]"]["neutral"],
          "neutral-focus": daisyUi["[data-theme=light]"]["neutral-focus"],
          "neutral-content": daisyUi["[data-theme=light]"]["neutral-content"],
          "base-100": daisyUi["[data-theme=light]"]["base-100"],
          "base-200": daisyUi["[data-theme=light]"]["base-200"],
          "base-300": daisyUi["[data-theme=light]"]["base-300"],
          "base-content": "hsl(246,8%,35%)",
          info: daisyUi["[data-theme=light]"]["info"],
          "info-content": daisyUi["[data-theme=light]"]["info-content"],
          success: daisyUi["[data-theme=light]"]["success"],
          "success-content": daisyUi["[data-theme=light]"]["success-content"],
          warning: daisyUi["[data-theme=light]"]["warning"],
          "warning-content": daisyUi["[data-theme=light]"]["warning-content"],
          error: daisyUi["[data-theme=light]"]["error"],
          "error-content": daisyUi["[data-theme=light]"]["error-content"],
          ".bg-body": {
            "background-color": "#FEFEFE",
          },
          ".bg-gradient": {
            "background-image":
              "linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)",
          },
          ".btn-gradient": {
            background:
              "linear-gradient(76.35deg, rgb(128, 26, 230) 15.89%, rgb(162, 26, 230) 89.75%)",
          },
          ".logo": {
            fill: "#8532CE",
            stroke: "#8532CE",
            color: "#8532CE",
          },
          "--idm-base-100": "246 8% 35%",
          "--idm-base-200": "246 6% 55%",
          "--idm-base-300": "246 6% 78%",
          "--idm-title": "270 60% 52%",
        },
      },
    ],
  },
};
