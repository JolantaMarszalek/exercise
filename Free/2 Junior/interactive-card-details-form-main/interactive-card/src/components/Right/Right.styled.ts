import styled from "styled-components";

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background-color: green;

  @media (max-width: 1024px) {
  }
`;

export const RightSectionCard = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
