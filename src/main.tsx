import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import React from "react";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
