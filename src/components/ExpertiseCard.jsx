import React from "react";
import "../assets/styles/ExpertiseCard.css"; 

export function ExpertiseCard({ title, description, image }) {
  return (
    <div className="expertise-card">
      <img src={image} alt={title} className="expertise-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn-small">Tudj meg többet</button>
    </div>
  );
}