import { Bottom } from "./components/Bottom/Bottom.component";
import { Card } from "./components/Card/Card.component";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  // const ageProps = { years: 0, months: 0, days: 0 };
  return (
    <>
      <Layout>
        <Card>
          <Header />
          <Bottom
          // {...ageProps}
          />
        </Card>
      </Layout>
    </>
  );
}

export default App;
