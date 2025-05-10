
export function AdminLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main style={{ flex: 1, padding: "2rem" }}>
        <h2>Ez az Admin Layout fő része!</h2>
        <Outlet /> {/* 💥 Ide jön majd az aktuális admin oldal tartalom */}
      </main>

      <Footer />
    </div>
  );
}
