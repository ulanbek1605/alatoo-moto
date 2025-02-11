module.exports = {
	i18n: {
	  locales: ["en", "ru"], // Доступные локали
	  defaultLocale: "en", // Дефолтный язык
	  localeDetection: false, // Отключаем автоматическое определение локали
	},
	reloadOnPrerender: process.env.NODE_ENV === "development", // Обновление локализации в dev-режиме
  };
  