import { useState } from "react";
import { Circle, RatingSection } from "./Rating.styled";

export const Rating = () => {
  const [clicked, setClicked] = useState(false);

  const handleCircleClick = () => {
    setClicked((prevState) => !prevState);
  };
  return (
    <RatingSection>
      <Circle clicked={clicked} onClick={handleCircleClick}>
        1
      </Circle>
      <Circle clicked={clicked} onClick={handleCircleClick}>
        2
      </Circle>
      <Circle clicked={clicked} onClick={handleCircleClick}>
        3
      </Circle>
      <Circle clicked={clicked} onClick={handleCircleClick}>
        4
      </Circle>
      <Circle clicked={clicked} onClick={handleCircleClick}>
        5
      </Circle>
    </RatingSection>
  );
};
