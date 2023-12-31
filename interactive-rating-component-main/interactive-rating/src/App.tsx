import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1.page";
import { Page2 } from "./pages/Page2.page";
import { RatingContextProvider } from "./components/Rating/Rating.component";

function App() {
  return (
    <>
      {" "}
      <Router>
        <RatingContextProvider>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/thankYou" element={<Page2 />} />
          </Routes>
        </RatingContextProvider>
      </Router>
    </>
  );
}

export default App;
