import React from "react";
import ReactDOM from "react-dom/client";
import AuthApp from "./AuthApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthApp />
    </Provider>
  </React.StrictMode>,
);
