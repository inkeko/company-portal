import * as React from "react";
import { useTranslation } from "react-i18next";

export function LandingIntro() {
  const { t } = useTranslation();

  return (
    <main className="hero-section">
     <h2>{t("intro.heading")}</h2>
      <p>{t("intro.description")}</p>
    </main>
  );
}

