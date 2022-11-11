import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SortingContext from "./context/SortingContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SortingContext>
      <App />
    </SortingContext>
  </React.StrictMode>
);
