import * as React from "react";

export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <p>&copy; {new Date().getFullYear()} Modern Egészség Centrum</p>
      <p>Kapcsolat: info@egeszseg.hu | +36 30 123 4567</p>
    </footer>
  );
}
