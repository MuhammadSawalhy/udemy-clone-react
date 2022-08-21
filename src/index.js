import React from "react";
// order matter, the last the higher priority
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/style.css";
import "./css/nav.css";

import ReactDOM from "react-dom/client";
import CoursesTabs from "./components/CoursesTabs";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CoursesTabs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
