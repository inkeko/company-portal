import * as React from "react";
import { useExpertises } from "../hooks/useExpertises";
import { ExpertiseCard } from "./ExpertiseCard";
import { useTranslation } from "react-i18next";

export function LandingExpertises() {
  const { t } = useTranslation();
  const { expertises, loading } = useExpertises();

  return (
    <section className="expertise-section">
      <h2>{t("expertise.title")}</h2>
      {loading ? (
        <p>{t("expertise.loading")}</p>
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
