import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.component";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { GlobalStyle } from "./theme/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to="not-found" replace={true} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
