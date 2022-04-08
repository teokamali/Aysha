import React from "react";
import ReactDOM from "react-dom";
import "core-js";
import "bootstrap/dist/css/bootstrap-grid.rtl.min.css";
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./assets/fontawesome/pro/css/all.min.css";
import "./assets/fonts/font-style.css";
import "./styles/global.css";
import "./styles/light.css";
import "./styles/dark.css";
import "./AdminPanel/scss/style.scss";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
