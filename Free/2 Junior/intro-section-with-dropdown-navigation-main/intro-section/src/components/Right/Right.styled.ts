import styled from "styled-components";

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`;

export const RightSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
  margin-left: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;

export const RightSectionCardImage = styled.img`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    &.image-hero-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    &.image-hero-desktop {
      display: none;
    }
  }
`;
