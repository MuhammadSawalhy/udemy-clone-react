// order matter, the last the higher priority
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./widgets/Routes";
import NavigationBar from "./widgets/NavigationBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NavigationBar />
    <Routes />
  </React.StrictMode>
);
