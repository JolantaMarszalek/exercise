import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import CountryPage from "./pages/Country.page";
import Homepage from "./pages/Homepage.page";
import NotFoundPage from "./pages/NotFound.page";
// import { CountryContextProvider } from "./context/country.context";
import { ThemeProvider } from "styled-components";
import { NightModeContext } from "./context/theme.context";
import { useContext } from "react";
// import Toggle from "./components/Toggle/Toggle.component";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const {
    theme,
    // toggleTheme
  } = useContext(NightModeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="country/:country" element={<CountryPage />} />
        <Route path="*" element={<Navigate to="not-found" replace={true} />} />
      </Route>
    )
  );

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {/* <Toggle toggleTheme={toggleTheme} /> */}
        {/* <CountryContextProvider> */}
        <RouterProvider router={router} />
        {/* </CountryContextProvider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
