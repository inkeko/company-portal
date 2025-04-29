import React from "react";

export function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Cégem Kft. Minden jog fenntartva.
      </p>
      <p style={styles.text}>
        Elérhetőség: info@cegem.hu | Telefon: +36 30 123 4567
      </p>
    </footer>
  );
}

// Stílusok
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    marginTop: "2rem"
  },
  text: {
    margin: "0.5rem 0"
  }
};
