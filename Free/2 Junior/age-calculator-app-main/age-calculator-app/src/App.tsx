import { useState } from "react";
import { Bottom } from "./components/Bottom/Bottom.component";
import { Card } from "./components/Card/Card.component";
import { AgeContext, Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  return (
    <>
      <AgeContext.Provider value={{ ...age, setAge }}>
        <Layout>
          <Card>
            <Header />
            <Bottom />
          </Card>
        </Layout>{" "}
      </AgeContext.Provider>
    </>
  );
}

export default App;
