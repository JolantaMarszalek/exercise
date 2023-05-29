import React from "react";
import {
  MiddleCardContainer,
  MiddleCardDescribe,
  MiddleCardSection,
  MiddleCardStyled,
  MiddleCardTitle,
} from "./MiddleCard.styled";

export const MiddleCard = () => {
  return (
    <MiddleCardSection>
      <MiddleCardContainer>
        <MiddleCardStyled>
          <MiddleCardTitle>Brand Recognition</MiddleCardTitle>
          <MiddleCardDescribe>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </MiddleCardDescribe>
        </MiddleCardStyled>
        <MiddleCardStyled>
          <MiddleCardTitle>Detailed Records</MiddleCardTitle>
          <MiddleCardDescribe>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </MiddleCardDescribe>
        </MiddleCardStyled>
        <MiddleCardStyled>
          <MiddleCardTitle> Fully Customizable</MiddleCardTitle>
          <MiddleCardDescribe>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </MiddleCardDescribe>
        </MiddleCardStyled>
      </MiddleCardContainer>
    </MiddleCardSection>
  );
};
