import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./i18n";
import "./assets/styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>

  </React.StrictMode>
);
