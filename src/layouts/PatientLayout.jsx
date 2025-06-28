import { LandingHeader } from "../components/LandingHeader";
import { LandingFooter } from "../components/LandingFooter";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/PatientLayout.css";
import { useUser } from "../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

function PatientSidebar() {
  const { t } = useTranslation();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // töröld a felhasználói állapotot (context)
    navigate("/login");
  };

  return (
    <aside className="patient-sidebar">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <NavLink to="/dashboard" end>
            {t("patient.menu.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/appointments">
            {t("patient.menu.appointments")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/book">
            {t("patient.menu.book")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile">
            {t("patient.menu.profile")}
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/dashboard/documents">
            {t("patient.menu.documents")}
          </NavLink>
        </li> */}
        <li>
          <button onClick={handleLogout} className="logout-btn">
            {t("patient.menu.logout")}
          </button>
        </li>
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
