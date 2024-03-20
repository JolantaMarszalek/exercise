import styled from "styled-components";

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

  @media (max-width: 1024px) {
  }
`;

export const LeftSectionCard = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
