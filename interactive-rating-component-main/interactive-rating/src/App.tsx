import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1.page";
import { Page2 } from "./pages/Page2.page";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/thankYou" element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
