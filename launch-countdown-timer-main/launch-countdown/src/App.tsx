import { SingleCard } from "./components/SingleCard/SingleCard.component";
import { SingleCardSection } from "./components/SingleCard/SingleCard.styled";

function App() {
  return (
    <SingleCardSection>
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </SingleCardSection>
  );
}

export default App;
