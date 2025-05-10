import * as React from "react";
import { LandingHeader } from "../components/LandingHeader";
import { LandingIntro } from "../components/LandingIntro.jsx";
import { LandingExpertises } from "../components/LandingExpertises.jsx";
import { LandingFooter } from "../components/LandingFooter.jsx";
import "../assets/styles/LandingPage.css";

export function LandingPage() {
  return (
    <div className="landing-container">
      <LandingHeader />
      <LandingIntro />
      <LandingExpertises />
      <LandingFooter />
    </div>
  );
}
