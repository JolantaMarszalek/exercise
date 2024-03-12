import { BottomSection } from "./components/BottomSection/BottomSection.component";
import { Header } from "./components/Header/Header.component";
import { MiddleSection } from "./components/MiddleSection/MiddleSection.component";
import { OpinionSection } from "./components/OpinionSection/OpinionSection.component";
import { TopSection } from "./components/TopSection/TopSection.component";

function App() {
  return (
    <>
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <OpinionSection />
    </>
  );
}

export default App;
