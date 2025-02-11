"use client"; // Указываем, что компонент работает на клиенте

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./languageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en";
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
      setCurrentLanguage(lng);
    }
    setIsDropdownOpen(false); // Закрываем дропдаун после выбора
  };

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {currentLanguage === "en" ? "English" : "Русский"} <span>{isDropdownOpen ? "▲" : "▼"}</span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown">
          <div className="option" onClick={() => changeLanguage("en")}>
            English
          </div>
          <div className="option" onClick={() => changeLanguage("ru")}>
            Русский
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
