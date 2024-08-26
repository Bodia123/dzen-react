import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/eng.json";
import ruTranslations from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: enTranslations,
    },
    ru: {
      translation: ruTranslations,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
});

export default i18n;
