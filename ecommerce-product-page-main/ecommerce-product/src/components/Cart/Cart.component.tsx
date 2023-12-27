import {
  ButtonCart,
  ButtonCartSection,
  CartAmount,
  CartEmpty,
  CartItems,
  CartPrices,
  CartProductName,
  CartSection,
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

// interface ThumbnailCartProps {
//   src: string;
//   alt: string;
// }

// const ThumbnailCart: React.FC<ThumbnailCartProps> = ({ src, alt }) => {
//   return (
//     <div>
//       <img src={src} alt={alt} />
//     </div>
//   );
// };
// export default ThumbnailCart;

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
      <ThumbnailCartContainer>
        <ThumbnailCart src={imageCartProduct} alt="Product Thumbnail" />
      </ThumbnailCartContainer>
      <CartPrices>
        <CartProductName></CartProductName>
        <CartItems> $125.00 x {totalQuantity}</CartItems>
        <CartAmount> ${totalAmount.toFixed(2)}</CartAmount>
      </CartPrices>
      <ButtonCartSection>
        <ButtonCart>Checkout</ButtonCart>
      </ButtonCartSection>
    </CartSection>
  );
};
