import React, { useState } from "react";
import {
  Input,
  QuanitySectionStyle,
  SmallButtonLeft,
  SmallButtonRight,
} from "./Quantity.styled";

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
      <SmallButtonLeft onClick={decreaseQuantity}>-</SmallButtonLeft>
      {/* <button className="decrease" onClick={decreaseQuantity}>
        -
      </button> */}
      <Input value={quantity} readOnly></Input>
      {/* <input type="text" className="quantity-input" value={quantity} readOnly /> */}
      <SmallButtonRight onClick={increaseQuantity}>+</SmallButtonRight>
      {/* <button className="increase" onClick={increaseQuantity}>
        +
      </button> */}
      {/* </div> */}
    </QuanitySectionStyle>
  );
};

export default Quantity;
