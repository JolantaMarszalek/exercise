import { Bottom } from "./components/Bottom/Bottom.component";
import { Button } from "./components/Button/Button.component";
import { Card } from "./components/Card/Card.component";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.component";

function App() {
  return (
    <>
      <Layout>
        <Card>
          <Header />
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </Button>
          <Bottom />
        </Card>
      </Layout>
    </>
  );
}

export default App;
