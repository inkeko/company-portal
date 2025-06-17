import * as React from "react";
import { useTranslation } from "react-i18next";

export function LandingFooter() {
  const { t } = useTranslation();
   // .env változók beolvasása
  const email = import.meta.env.VITE_CONTACT_EMAIL || "info@egeszseg.hu";
  const phone = import.meta.env.VITE_CONTACT_PHONE || "+36 30 123 4567";

  return (
    <footer className="landing-footer">
      <p>&copy; {new Date().getFullYear()} {t("footer.title")}</p>
      <p>{t("footer.contact", { email})} | {t("footer.phone", { phone })}</p>
      </footer>
  );
}
