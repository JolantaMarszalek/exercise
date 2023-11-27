import styled from "styled-components";

export const FooterSection = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* background-color: var(--neutral-very-dark-blue); */
  position: fixed;
  bottom: 0;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--neutral-very-dark-blue);
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
  background-color: #2f2439;
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
