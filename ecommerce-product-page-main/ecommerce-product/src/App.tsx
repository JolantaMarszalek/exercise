import { Header } from "./components/Header/Header.component";
import { MiddleSection } from "./components/MiddleSection/MiddleSection.component";
import { useState } from "react";

interface Product {
  image: string;
  quantity: number;
  price: number;
}

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <MiddleSection addToCart={addToCart} />
    </>
  );
}

export default App;
