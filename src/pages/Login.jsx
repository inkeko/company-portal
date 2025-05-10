import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css"; // Külső CSS

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "Admin123+") {
      navigate("/admin");
    } else if (email === "user@example.com" && password === "User123+") {
      navigate("/dashboard");
    } else {
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
