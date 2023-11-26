import { Footer } from "./components/Footer/Footer.component";
import { TopSection } from "./components/TopSection/TopSection.component";
import { Layout } from "./components/Layout/Layout.component";
import { MiddleSection } from "./components/MiddleSection/MiddleSection.component";

function App() {
  return (
    <>
      <Layout>
        <TopSection />
        <MiddleSection />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
