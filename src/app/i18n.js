import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isBrowser = typeof window !== "undefined";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: isBrowser ? "en" : "ru", // Избегаем SSR-проблем
    fallbackLng: "ru",
    debug: isBrowser, // Отключаем debug на сервере
    interpolation: {
      escapeValue: false, // React сам экранирует
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
