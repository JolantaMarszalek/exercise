import {
  MiddleStyled,
  MiddleStyledCardLeft,
  MiddleStyledCardRight,
} from "./MiddleSection.styled";
import React from "react";

import interactiveImage from "./../../../../images/desktop/image-interactive.jpg";

export const MiddleSection: React.FC = () => {
  return (
    <>
      <MiddleStyled>
        <MiddleStyledCardLeft
          style={{
            backgroundImage: `url(${interactiveImage})`,
          }}></MiddleStyledCardLeft>
        <MiddleStyledCardRight></MiddleStyledCardRight>
      </MiddleStyled>
    </>
  );
};
