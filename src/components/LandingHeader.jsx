import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo121.png";

import "../assets/styles/LandingHeader.css";

export function LandingHeader() {
  const {t, i18n } = useTranslation();
 const currentLang = i18n.language;


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  return (
    <header className="landing-header">
      <img src={logo} alt="Logo" className="header-logo" />

      <div className="header-content">
        <h1>{t("header.title")}</h1>
        <p>{t("header.subtitle")}</p>
      </div>

      <div className="header-buttons">
        <Link to="/login" className="btn">{t("buttons.login")}</Link>
        <Link to="/register" className="btn btn-secondary">{t("buttons.register")}</Link>
      </div>
       
  <div className="lang-switcher">
      <button
        onClick={() => changeLanguage("hu")}
        className={`lang-btn ${currentLang === "hu" ? "active-lang" : ""}`}
        title="Magyar"
      >🇭🇺 HU</button>

      <button
        onClick={() => changeLanguage("en")}
        className={`lang-btn ${currentLang === "en" ? "active-lang" : ""}`}
        title="English"
      >🇬🇧 EN</button>

      <button
        onClick={() => changeLanguage("de")}
        className={`lang-btn ${currentLang === "de" ? "active-lang" : ""}`}
        title="Deutsch"
      >🇩🇪 DE</button>

      <button
        onClick={() => changeLanguage("zh-CN")}
        className={`lang-btn ${currentLang === "zh-CN" ? "active-lang" : ""}`}
        title="中文"
      >🇨🇳 中文</button>
    </div>

    </header>
  );
}
