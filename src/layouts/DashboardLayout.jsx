
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserHeader } from "../components/UserHeader";
import { UserFooter } from "../components/UserFooter";

export function DashboardLayout() {
  return (
    <div>
      {/* Fejléc */}
      <UserHeader />

      {/* Fő tartalom + oldalsáv */}
      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <ul style={styles.navList}>
            <li><Link to="/dashboard">Kezdőlap</Link></li>
            <li><Link to="/profile">Profilom</Link></li>
            <li><Link to="/settings">Beállítások</Link></li>
          </ul>
        </aside>

        <section style={styles.content}>
          <Outlet />
        </section>
      </div>

      {/* Lábléc */}
      <UserFooter />
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    minHeight: "80vh", // így van hely az oldalnak, a footer nem csúszik fel
  },
  sidebar: {
    width: "200px",
    background: "#f0f0f0",
    padding: "1rem",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  content: {
    flex: 1,
    padding: "2rem",
    backgroundColor: "#fff",
  },
};
