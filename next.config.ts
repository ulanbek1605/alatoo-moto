import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n: {
  //   locales: ["en", "ru"], // Доступные локали
  //   defaultLocale: "en", // Дефолтный язык
  // },
  reactStrictMode: true,
  trailingSlash: true, // Добавляем слэши в конец URL (необязательно)
};

export default nextConfig;
