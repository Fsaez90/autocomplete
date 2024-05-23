import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Toggle from "./components/Toggle";
import Back from "./components/Back";
import "../src/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Toggle />
      <App />
      <Back />
    </div>
  </React.StrictMode>
);
