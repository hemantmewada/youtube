import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { YTProvider } from "./context/yt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <YTProvider>
    <App />
  </YTProvider>
);
