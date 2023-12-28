import { Card } from "./components/Card/Card.component";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  return (
    <>
      <h1>app</h1>
      <Layout>
        <Card>
          <Header />
        </Card>
      </Layout>
    </>
  );
}

export default App;
