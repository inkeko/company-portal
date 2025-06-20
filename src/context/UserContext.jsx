// src/context/UserContext.jsx
import React, { createContext, useState, useContext } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // kezdetben nincs user
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
// Saját hook, hogy könnyű legyen használni:
export function useUser() {
  return useContext(UserContext);
}
