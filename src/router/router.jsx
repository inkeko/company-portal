
// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { AdminPage } from "../pages/AdminPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFound } from "../pages/NotFound";
import { UserHome } from "../pages/UserHome"; // ➡️ ÚJ!

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminPage /> }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // 🔥 most már layout-tal
    children: [
      { index: true, element: <UserHome /> } // ⬅️ az új oldal
    ]
  },
  { path: "*", element: <NotFound /> }
]);
