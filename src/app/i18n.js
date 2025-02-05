import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    lng: "en", 
    fallbackLng: "ru", 
    debug: true, 
    interpolation: {
      escapeValue: true, // Отключаем экранирование (необходимо для React)
    },
    react: {
      useSuspense: false, // Отключаем Suspense (может помочь избежать ошибок гидратации)
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Указываем путь для загрузки переводов
    },
  });

export default i18n;
