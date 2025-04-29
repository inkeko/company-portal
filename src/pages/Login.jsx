
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setRole] = useState(""); // 🔥 új: szerepkör
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Példaképpen:
    if (email === "admin@example.com" && password === "Admin123+") {
      setRole("admin");
      navigate("/admin");
    } else if (email === "user@example.com" && password === "User123+") {
      setRole("user");
      navigate("/dashboard");
    } else {
      setError("❌ Hibás bejelentkezési adatok!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Bejelentkezés</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email cím:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Jelszó:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Jelszó"
            required
          />
        </div>

        <button type="submit">Belépés</button>
      </form>
    </div>
  );
}
