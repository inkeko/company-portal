import * as React from "react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Cégem Logója</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/dashboard" style={styles.link}>Főoldal</Link></li>
          <li><Link to="/" style={styles.link}>Kijelentkezés</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Kis egyszerű belső styling
const styles = {
  header: {
    backgroundColor: "#4CAF50",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
