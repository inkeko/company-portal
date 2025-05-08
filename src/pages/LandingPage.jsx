import React from "react";
import { useExpertises } from "../hooks/useExpertises";
import { ExpertiseCard } from "../components/ExpertiseCard";

import { LandingHeader } from "../components/LandingHeader";
import "../assets/styles/LandingPage.css";

export function LandingPage() {
  const { expertises, loading } = useExpertises();

  return (
    <div className="landing-container">
      <LandingHeader />

      <main className="hero-section">
        <h2>Egészségügyi szolgáltatások, időpontfoglalás, orvosaink bemutatása</h2>
        <p>Korszerű technológiával, emberközpontú gondoskodással.</p>
      </main>

 {/* 👉 SZAKTERÜLETEK BLOKK */}
 <section className="expertise-section">
        <h2>Szakterületeink</h2>

        {loading ? (
          <p>Betöltés...</p>
        ) : (
          <div className="expertise-grid">
            {expertises.map((exp) => (
              <ExpertiseCard
                key={exp.id}
                title={exp.name}
                description={exp.description}
                image="/placeholder.jpg"
              />
            ))}
          </div>
        )}
      </section>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Modern Egészség Centrum</p>
        <p>Kapcsolat: info@egeszseg.hu | +36 30 123 4567</p>
      </footer>
    </div>
  );
}
