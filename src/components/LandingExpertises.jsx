import * as React from "react";
import { useExpertises } from "../hooks/useExpertises";
import { ExpertiseCard } from "./ExpertiseCard";

export function LandingExpertises() {
  const { expertises, loading } = useExpertises();

  return (
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
              image={exp.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}
