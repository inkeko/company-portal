
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { AdminPage } from "../pages/AdminPage"; // ha már van
import { NotFound } from "../pages/NotFound"; // ha van hibakezelő

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "*", element: <NotFound /> } // minden más URL-re
]);
