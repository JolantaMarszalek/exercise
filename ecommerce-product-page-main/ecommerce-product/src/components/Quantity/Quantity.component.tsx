import React, { useState } from "react";
import { Input, QuanitySectionStyle, SmallButton } from "./Quantity.styled";

const Quantity: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <QuanitySectionStyle>
      {" "}
      {/* <div className="quantity"> */}
      <SmallButton onClick={decreaseQuantity}>-</SmallButton>
      {/* <button className="decrease" onClick={decreaseQuantity}>
        -
      </button> */}
      <Input value={quantity} readOnly></Input>
      {/* <input type="text" className="quantity-input" value={quantity} readOnly /> */}
      <SmallButton onClick={increaseQuantity}>+</SmallButton>
      {/* <button className="increase" onClick={increaseQuantity}>
        +
      </button> */}
      {/* </div> */}
    </QuanitySectionStyle>
  );
};

export default Quantity;
