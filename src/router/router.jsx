  
  
// src/router/router.jsx
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";

import { DashboardLayout } from "../layouts/DashboardLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFound } from "../pages/NotFound";

import { LandingPage } from "../pages/LandingPage";


export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
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