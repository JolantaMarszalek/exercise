import { Header } from "./components/Header/Header.component";
import { MiddleSection } from "./components/MiddleSection/MiddleSection.component";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <MiddleSection />
    </>
  );
}

export default App;
