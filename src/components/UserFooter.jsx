import React from "react";

export function UserFooter() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Cégem Kft. – Felhasználói Portál
      </p>
      <p style={styles.text}>
        Elérhetőség: support@cegem.hu | Telefon: +36 30 987 6543
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    textAlign: "center",
    marginTop: "2rem",
    borderTop: "1px solid #ccc",
  },
  text: {
    margin: "0.5rem 0",
    color: "#555",
    fontSize: "0.9rem",
  },
};
