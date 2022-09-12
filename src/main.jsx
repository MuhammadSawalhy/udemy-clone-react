// order matter, the last the higher priority
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./widgets/Routes";
import NavigationBar from "./widgets/NavigationBar";
import Footer from "@widgets/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    // to make the icons a little bit bigger
    // they are small because I added this in the css
    // ->    :root { font-size: 10px; }
    fontSize: 20,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavigationBar />
          <Routes />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
