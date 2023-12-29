import { Bottom } from "./components/Bottom/Bottom.component";
import { Card } from "./components/Card/Card.component";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  return (
    <>
      <Layout>
        <Card>
          <Header />
          <Bottom />
        </Card>
      </Layout>
    </>
  );
}

export default App;
