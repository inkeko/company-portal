// src/api/axios.js
import axios from "axios";

const api = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
   withCredentials: true                // FONTOS! A JWT cookie átmenjen.
});

export default api;
