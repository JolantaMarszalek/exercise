import { CartSection } from "./Cart.styled";

interface CartItem {
  id?: number;
  name?: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
}

export const Cart: React.FC<CartProps> = ({ cartItems }) => {
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
    </CartSection>
  );
};
