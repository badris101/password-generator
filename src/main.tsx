import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle, theme } from "@/GlobalStyle";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
