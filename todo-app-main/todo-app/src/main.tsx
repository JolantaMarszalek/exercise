import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./theme/globalStyles.ts";
import { NightModeProvider } from "./context/theme.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NightModeProvider>
      <GlobalStyle />
      <App />
    </NightModeProvider>
  </React.StrictMode>
);
