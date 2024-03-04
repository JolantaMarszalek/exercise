import { BottomSection } from "./components/BottomSection/BottomSection.component";
import { Footer } from "./components/Footer/Footer.component";
import { Header } from "./components/Header/Header.component";
import { MiddleSection } from "./components/MiddleSection/MiddleSection.component";
import { TopSection } from "./components/TopSection/TopSection.component";

function App() {
  return (
    <>
      <Header />
      <TopSection>TopSection</TopSection>
      <MiddleSection>MiddleSection</MiddleSection>
      <BottomSection>BottonSection</BottomSection>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
