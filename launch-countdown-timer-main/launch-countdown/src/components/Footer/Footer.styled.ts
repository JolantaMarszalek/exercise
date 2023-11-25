import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  height: auto;
  //background-color: var(--neutral-very-dark-blue);
  background-image: url("../../../../images/pattern-hills.svg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FooterSectionImages = styled.div`
  position: static;
  display: flex;
  margin-right: 100px;
  margin-top: 50px;
  color: white;

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
  padding: 15px;
`;
