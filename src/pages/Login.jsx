import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Egyszerű fix belépési adatok (később backend helyettesíti)
    if (email === "admin@example.com" && password === "Admin123+") {
      navigate("/admin");
    } else if (email === "user@example.com" && password === "User123+") {
      navigate("/dashboard");
    } else {
      setError("❌ Hibás email vagy jelszó!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto" }}>
      <h2>Bejelentkezés</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="pl. admin@example.com"
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Jelszó:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="pl. Admin123+"
            required
          />
        </div>

        <button type="submit">Belépés</button>
      </form>
    </div>
  );
}


