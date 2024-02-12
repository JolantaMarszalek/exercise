import { Navigate } from "react-router-dom";
import { MainPage1 } from "./components/pages/MainPage1.page";
import { NotFoundPage } from "./components/pages/NotFoundPage.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage2 } from "./components/pages/MainPage2.page";
import { MainPage3 } from "./components/pages/MainPage3.page";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage1 />} />
          <Route path="/simple-bookmarking" element={<MainPage1 />} />
          <Route path="/speedy-searching" element={<MainPage2 />} />
          <Route path="/easy-sharing" element={<MainPage3 />} />
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
