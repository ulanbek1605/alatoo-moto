import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isBrowser = typeof window !== "undefined"; // Проверяем, выполняется ли код в браузере

i18n
  .use(Backend) // Подключаем бэкенд для загрузки JSON-файлов с переводами
  .use(isBrowser ? LanguageDetector : () => {}) // Определяем язык только в браузере
  .use(initReactI18next) // Интеграция с React
  .init({
    lng: isBrowser ? localStorage.getItem("language") || "ru" : "ru", // Устанавливаем язык из localStorage или дефолтный "ru"
    fallbackLng: "ru", // Запасной язык
    debug: isBrowser && process.env.NODE_ENV === "development", // Логирование в dev-режиме
    interpolation: {
      escapeValue: false, // Отключаем экранирование HTML (безопасно для React)
    },
    react: {
      useSuspense: false, // Отключаем Suspense (исключает ошибки в SSR)
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам переводов
    },
    detection: {
      order: ["cookie", "localStorage", "navigator"], // Порядок определения языка
      caches: ["cookie", "localStorage"], // Кешируем в localStorage и cookie
    },
  });

export default i18n;
