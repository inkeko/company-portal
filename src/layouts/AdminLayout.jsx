import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function AdminLayout() {
  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.content}>
        <Outlet /> {/* ide töltődik be az aktuális admin oldal */}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  content: {
    flex: 1,
    padding: "2rem"
  }
};
