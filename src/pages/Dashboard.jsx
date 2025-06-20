import * as React from "react";
import { useUser } from "../context/UserContext";
import { useTranslation } from "react-i18next";
import "../assets/styles/Dashboard.css";

export function Dashboard() {
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        <span role="img" aria-label="user" className="dashboard-icon">👤</span>
        {t("dashboard.title")}
        {user && (
          <span className="dashboard-username">
            {user.name}
          </span>
        )}
      </h1>
      <p className="dashboard-welcome">{t("dashboard.welcome")}</p>
    </div>
  );
}
