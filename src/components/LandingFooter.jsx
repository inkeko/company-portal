import * as React from "react";
import { useTranslation } from "react-i18next";

export function LandingFooter() {
  const { t } = useTranslation();
  return (
    <footer className="landing-footer">
      <p>&copy; {new Date().getFullYear()} {t("footer.title")}</p>
      <p>{t("footer.contact")} | {t("footer.phone")}</p>
      </footer>
  );
}
