
export function MainLayout() {
  return (
    <div className="layout-container">
      <Header />
      
      {/* Középső rész – ide töltődnek be az oldalak */}
      <main style={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

// Stílusok
const styles = {
  main: {
    minHeight: "80vh", // Legalább 80% magasság a látható ablakhoz képest
    padding: "2rem",
    backgroundColor: "#f5f5f5"
  }
};
