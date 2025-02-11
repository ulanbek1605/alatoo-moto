"use client"; 

import React, { useState } from "react";
import "./header.css";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import '../../app/i18n'

function Header() {
  const pathName = usePathname();
  const { t } = useTranslation(); // Подключаем i18n
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header-elem">
          <div className="header_logo">ALATOO-MOTO</div>
          <div className="header_nav">
            <a href="/" className={pathName === "/" ? "active" : ""}>
              {t("header.home")}
            </a>
            <a href="/renting/" className={pathName === "/renting" ? "active" : ""}>
              {t("header.rentals")}
            </a>
            <a href="/services/" className={pathName === "/services" ? "active" : ""}>
              {t("header.services")}
            </a>
            <a href="/partners/" className={pathName === "/partners" ? "active" : ""}>
              {t("header.partners")}
            </a>
            <a href="/about/" className={pathName === "/about" ? "active" : ""}>
              {t("header.about")}
            </a>
            <a href="/faq/" className={pathName === "/faq" ? "active" : ""}>
              {t("header.faq")}
            </a>
            <a href="/contacts/" className={pathName === "/contacts" ? "active" : ""}>
              {t("header.contacts")}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="menu-img" onClick={handleClick}>
            <img src="/svg/menu.svg" alt="" />
          </div>
          <div className={`burger-menu ${open ? "active" : ""}`}>
            <div className="menu-nav">
              <a href="/" className={pathName === "/" ? "active" : ""}>
                {t("header.home")}
              </a>
              <a href="/renting/" className={pathName === "/renting" ? "active" : ""}>
                {t("header.rentals")}
              </a>
              <a href="/services/" className={pathName === "/services" ? "active" : ""}>
                {t("header.services")}
              </a>
              <a href="/partners/" className={pathName === "/partners" ? "active" : ""}>
                {t("header.partners")}
              </a>
              <a href="/about/" className={pathName === "/about" ? "active" : ""}>
                {t("header.about")}
              </a>
              <a href="/faq/" className={pathName === "/faq" ? "active" : ""}>
                {t("header.faq")}
              </a>
              <a href="/contacts/" className={pathName === "/contacts" ? "active" : ""}>
                {t("header.contacts")}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
