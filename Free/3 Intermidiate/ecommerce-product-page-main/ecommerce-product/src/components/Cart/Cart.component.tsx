import {
  ButtonCart,
  ButtonCartSection,
  CartAmount,
  CartBottomSection,
  CartEmpty,
  CartItems,
  CartPriceSection,
  CartPrices,
  CartProductName,
  CartSection,
  CartTextSection,
  CartTitle,
  ThumbnailCart,
  ThumbnailCartContainer,
} from "./Cart.styled";
import imageCartProduct from "../../../../images/image-product-1-thumbnail.jpg";

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
        <CartTitle>Cart</CartTitle>
        <CartEmpty>Your cart is empty.</CartEmpty>
      </CartSection>
    );
  }

  return (
    <CartSection>
      <CartTitle>Cart</CartTitle>
      <CartBottomSection>
        <ThumbnailCartContainer>
          <ThumbnailCart src={imageCartProduct} alt="Product Thumbnail" />
        </ThumbnailCartContainer>
        <CartTextSection>
          <CartProductName>Fall Limited Edition Sneakers</CartProductName>
          <CartPriceSection>
            <CartItems> $125.00 x {totalQuantity}</CartItems>
            <CartAmount> ${totalAmount.toFixed(2)}</CartAmount>
          </CartPriceSection>
        </CartTextSection>
      </CartBottomSection>
      <ButtonCartSection>
        <ButtonCart>Checkout</ButtonCart>
      </ButtonCartSection>
    </CartSection>
  );
};
