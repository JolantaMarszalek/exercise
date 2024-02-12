import { Card } from "./components/Card/Card.component";
import { Layout } from "./components/Layout/Layout.component";
import { TopSection } from "./components/TopSection/TopSection.component";

function App() {
  return (
    <>
      <Layout>
        <TopSection></TopSection>
        <Card></Card>
      </Layout>
    </>
  );
}

export default App;
