// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // <-- A backend API címe (PROXY esetén lehet "/api")
  withCredentials: true                // FONTOS! A JWT cookie átmenjen.
});

export default api;
