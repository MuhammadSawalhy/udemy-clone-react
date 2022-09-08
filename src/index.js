// order matter, the last the higher priority
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./widgets/Routes";
import NavigationBar from "./widgets/NavigationBar";
import { ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    // to make the icons a little bit bigger
    // they are small because I added this in the css
    // ->    :root { font-size: 10px; }
    fontSize: 20,
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
