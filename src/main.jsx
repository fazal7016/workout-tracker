import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/routes/AppRoutes";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <AppRoutes />
    <ToastContainer autoClose={800} />
  </>,
);
