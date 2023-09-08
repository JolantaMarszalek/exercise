import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NightModeProvider } from "./context/theme.context";
import GlobalStyle from "./theme/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <NightModeProvider>
    {/* <GlobalStyle /> */}
    <App />
  </NightModeProvider>
  // </React.StrictMode>
);
