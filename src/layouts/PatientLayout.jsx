import { LandingHeader } from "../components/LandingHeader";
import { LandingFooter } from "../components/LandingFooter";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/PatientLayout.css";

function PatientSidebar() {
  const { t } = useTranslation();

  return (
   <aside className="patient-sidebar">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li><a href="/dashboard">{t("patient.menu.home")}</a></li>
        <li><a href="/appointments">{t("patient.menu.appointments")}</a></li>
        <li><a href="/profile">{t("patient.menu.profile")}</a></li>
      </ul>
    </aside>
  );
}

export function PatientLayout() {
  return (
    <div>
      <LandingHeader />
      <div style={{ display: "flex", minHeight: "80vh" }}>
        <PatientSidebar />
        <main style={{ flex: 1, padding: "2rem" }}>
          <Outlet />
        </main>
      </div>
      <LandingFooter />
    </div>
  );
}
