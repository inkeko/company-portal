import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo121.png";
import "../assets/styles/LandingHeader.css";

export function LandingHeader() {
  return (
    <header className="landing-header">
      <img src={logo} alt="Logo" className="header-logo" />

      <div className="header-content">
        <h1>Modern Egészség Centrum</h1>
        <h3>A jövő egészsége ma kezdődik</h3>
      </div>

      <div className="header-buttons">
        <Link to="/login" className="btn">Belépés</Link>
        <Link to="/register" className="btn btn-secondary">Regisztráció</Link>
      </div>
    </header>
  );
}
