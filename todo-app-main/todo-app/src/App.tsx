// import GlobalStyle from "./theme/globalStyles";

import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.styled";
import { ToDo } from "./components/ToDo/ToDo.component";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <ToDo
        // query={query}
        // setQuery={setQuery}
        // placeholder="Create a new todo..."
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Layout>
    </>
  );
}

export default App;