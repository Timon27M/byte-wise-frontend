import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/form/DefaultForm";

export default function AuthApp() {
  console.log("AuthApp rendered");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            <div style={{ padding: 24, border: "2px dashed red" }}>
              <h3>Remote Auth</h3>
              <p>Заглушка из microfrontend REGISTER</p>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <LoginForm />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
