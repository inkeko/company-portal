
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { AdminPage } from "../pages/AdminPage";
import { AdminLayout } from "../layouts/AdminLayout"; // 🔥 új
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/admin",
    element: <AdminLayout />, // 👈 layout köré csomagoljuk
    children: [
      { index: true, element: <AdminPage /> }
    ]
  },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "*", element: <NotFound /> }
]);

