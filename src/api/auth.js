// src/api/auth.js
import api from "./axios";

export function login(email, password) {
  
  return api.post("/login", {
    username: email,  
    password: password
  });
}
