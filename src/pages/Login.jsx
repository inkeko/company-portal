import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css"; // Külső CSS
import { login } from "../api/auth"; // Ez legyen jól megírva, lásd később!

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    await login(email, password);    // <-- csak await, nincs response változó!
    navigate("/dashboard");
  } catch {
    setError("❌ Hibás email vagy jelszó!");
  }
};

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Bejelentkezés</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pl. admin@example.com"
              required
            />
          </div>
          <div>
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
    </div>
  );
}

