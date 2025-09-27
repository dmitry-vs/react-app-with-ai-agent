import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import type { Locale } from "./locales/types";

import en from "./locales/en";
import ru from "./locales/ru";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

const initI18n = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      debug: false,
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

// Initialize i18n and export the promise
export const i18nInitPromise = initI18n();

export default i18n;
