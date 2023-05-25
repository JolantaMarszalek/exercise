import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.component";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
      </Routes>
      ;
    </Layout>
  );
}

export default App;
