import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import app from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

render(
  <Router>
    <app />
  </Router>,
  document.getElementById("app")
);
