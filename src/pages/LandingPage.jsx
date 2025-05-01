import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LandingPage.css";

export function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Üdvözlünk a Magánrendelő Portálon</h1>
        <p>Egészségügyi szolgáltatások, orvosi időpontfoglalás és még sok más.</p>
        <button onClick={handleLoginClick}>Belépés</button>
      </div>
    </div>
  );
}
