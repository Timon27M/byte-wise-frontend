import "./index.css";
import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main page</div>} />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
