  
  
import { PatientLayout } from "../layouts/PatientLayout";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register"; // <-- ÚJ!
import { Admin } from "../pages/Admin";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFound } from "../pages/NotFound";
import { LandingPage } from "../pages/LandingPage";
import { Dashboard } from "../pages/Dashboard";
import { Appointments } from "../pages/Appointments";
import { BookAppointment } from "../pages/BookAppointment";
import { Profile } from "../pages/Profile";
// import { Documents } from "../pages/Documents"; // ezt majd később!

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }, // ← hozzáadva
  {
    path: "/dashboard",
    element: <PatientLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "appointments", element: <Appointments /> },
      { path: "book", element: <BookAppointment /> },
      { path: "profile", element: <Profile /> },
      // { path: "documents", element: <Documents /> }, // majd később!
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Admin /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);
