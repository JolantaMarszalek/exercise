import { Calculator } from "./components/Calculator/Calculator.component";
import { themes } from "./components/theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      {" "}
      <ThemeProvider theme={themes.default}>
        <Calculator />
      </ThemeProvider>
    </>
  );
}

export default App;
