import React from "react";

import { LandingHeader } from "../components/LandingHeader";
import "../assets/styles/LandingPage.css";

export function LandingPage() {
  

  return (
    <div className="landing-container">
      <LandingHeader />

      <main className="hero-section">
        <h2>Egészségügyi szolgáltatások, időpontfoglalás, orvosaink bemutatása</h2>
        <p>Korszerű technológiával, emberközpontú gondoskodással.</p>
      </main>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Modern Egészség Centrum</p>
        <p>Kapcsolat: info@egeszseg.hu | +36 30 123 4567</p>
      </footer>
    </div>
  );
}
