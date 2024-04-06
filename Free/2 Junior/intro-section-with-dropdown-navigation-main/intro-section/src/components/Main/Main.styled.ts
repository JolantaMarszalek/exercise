import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainSectionCard = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
