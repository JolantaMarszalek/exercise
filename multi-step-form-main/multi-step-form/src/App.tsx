import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Step1Page } from "./pages/Step1Page.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Step1Page />} />
        {/* <Route path="/selectPlan" element={<Step2Page />} />
        <Route path="/addOns" element={<Step3Page />} />
        <Route path="/summary" element={<Step4Page />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
