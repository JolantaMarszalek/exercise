import {
  MiddleStyled,
  MiddleStyledCardLeft,
  MiddleStyledCardRight,
  MiddleStyledCardRightDescribe,
  MiddleStyledCardRightTitle,
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
        <MiddleStyledCardRight>
          <MiddleStyledCardRightTitle>
            The leader in interactive VR
          </MiddleStyledCardRightTitle>
          <MiddleStyledCardRightDescribe>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </MiddleStyledCardRightDescribe>
        </MiddleStyledCardRight>
      </MiddleStyled>
    </>
  );
};
