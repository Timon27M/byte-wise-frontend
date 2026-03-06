import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function AuthApp() {
  console.log("AuthApp rendered");

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Provider>
  );
}
