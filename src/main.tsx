import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import "./style/main.scss";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
