import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";
import { login } from "../api/auth"; // Lásd lent, ezt írjuk majd meg!

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Ezt **FELTÉTLEN** definiálni kell!
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Feltételezzük, hogy a login függvény egy axios POST-ot csinál a /login-ra!
       const response = await login(email, password);
      const userData = response.data;
      // Ide azt is meg lehet írni, hogy jogosultság alapján hova lépjen tovább:
        if (userData.roles.includes("ROLE_ADMIN")) {
      navigate("/admin");
    } else if (userData.roles.includes("ROLE_DOCTOR")) {
      navigate("/doctor");
    } else if (userData.roles.includes("ROLE_CLIENT")) {
      navigate("/dashboard");
    } else {
      // fallback
      setError("Ismeretlen jogosultság!");
    }
    } catch  {
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


