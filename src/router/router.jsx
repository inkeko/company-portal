  
  
// src/router/router.jsx

import { Doctor } from "../pages/Doctor";
import { DoctorLayout} from "../layouts/DoctorLayout"
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import {Admin} from"../pages/Admin";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFound } from "../pages/NotFound";

import { LandingPage } from "../pages/LandingPage";
import { Dashboard } from "pages/Dashboard";


export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  
  {
    path: "/dashboard",
    element: <DashboardLayout />, // 🔥 most már layout-tal
    children: [
      { index: true, element: <Dashboard /> } // ⬅️ az új oldal
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />, // 🔥 most már layout-tal
    children: [
      { index: true, element: <Admin /> } // ⬅️ az új oldal
    ]
  },
  {
    path: "/doctor",
    element: <DoctorLayout />, // 🔥 most már layout-tal
    children: [
      { index: true, element: <Doctor /> } // ⬅️ az új oldal
    ]
  },
  { path: "*", element: <NotFound /> }
]);