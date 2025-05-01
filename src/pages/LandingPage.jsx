import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LandingPage.css";
import logo from "../assets/images/logo1.png"; // csak ha használsz logót

export function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="landing-container">
      <header className="hero-section">
        {/* opcionális logó */}
        <img src={logo} alt="Cég logó" className="landing-logo" />

        <h1>Üdvözlünk a Magánrendelő Portálon</h1>
        <p>Egészségügyi szolgáltatások, orvosi időpontfoglalás és még sok más.</p>

        <button className="landing-button" onClick={handleLoginClick}>
          Belépés
        </button>
      </header>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Modern Egészség Centrum</p>
        <p>Kapcsolat: info@egeszseg.hu | +36 30 123 4567</p>
      </footer>
    </div>
  );
}
