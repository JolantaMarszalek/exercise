import { Card } from "./components/Card/Card.component";
import { Input } from "./components/Input/Input.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  return (
    <>
      <h1>app</h1>
      <Layout>
        <Card>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </Card>
      </Layout>
    </>
  );
}

export default App;
