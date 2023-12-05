import { CartSection } from "./Cart.styled";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: Product[];
  // addToCart: (product: Product) => void;
}

export const Cart: React.FC<CartProps> = ({
  cartItems,
  // addToCart
}) => {
  // const [cartItems, setCartItems] = useState<Product[]>([]);
  return (
    <CartSection>
      <h3>Your Cart</h3>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
    </CartSection>
  );
};
