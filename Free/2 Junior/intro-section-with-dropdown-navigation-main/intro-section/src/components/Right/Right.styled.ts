import styled from "styled-components";

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
  }
`;

export const RightSectionCardImage = styled.img`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
