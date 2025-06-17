import * as React from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/ExpertiseCard.css";

export function ExpertiseCard({ title, description, image }) {
  const { t } = useTranslation();
  const phone = import.meta.env.VITE_CONTACT_PHONE;
  const email = import.meta.env.VITE_CONTACT_EMAIL;

  return (
    <div className="expertise-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="contact-actions">
        <a href={`tel:${phone.replace(/ /g, "")}`} className="btn-small">
          📞 {t("expertise.callus")} : {phone}
        </a>
        <a href={`mailto:${email}`} className="btn-small btn-secondary">
          ✉️ {t("expertise.emailus")} 
        </a>
      </div>
    </div>
  );
}
