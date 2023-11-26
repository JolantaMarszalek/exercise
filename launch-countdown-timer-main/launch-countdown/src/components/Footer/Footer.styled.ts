import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--neutral-very-dark-blue);
  // background-image: url("../../../../images/pattern-hills.svg");
  // background-size: cover;
  // background-repeat: no-repeat;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  svg {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const FooterSectionImages = styled.div`
  //position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(271, 23%, 18%);
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const FooterSectionSingleImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
