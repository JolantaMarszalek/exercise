import { CartSection } from "./Cart.styled";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }
interface CartItem {
  id?: number;
  name?: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
  // addToCart: (product: Product) => void;
}

export const Cart: React.FC<CartProps> = ({
  cartItems,
  // addToCart
}) => {
  // const [cartItems, setCartItems] = useState<Product[]>([]);
  const totalAmount = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const totalQuantity = cartItems.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  if (totalQuantity === 0) {
    return (
      <CartSection>
        <h3>Cart</h3>
        <p>Your cart is empty.</p>
      </CartSection>
    );
  }

  return (
    <CartSection>
      <h3>Cart</h3>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      {/* <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul> */}
    </CartSection>
  );
};
