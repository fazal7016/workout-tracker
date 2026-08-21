import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
    <ToastContainer autoClose={800} />
  </Provider>,
);
