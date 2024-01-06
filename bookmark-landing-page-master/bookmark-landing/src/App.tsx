import { Navigate } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage.page";
import { NotFoundPage } from "./components/pages/NotFoundPage.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to="not-found" replace={true} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
