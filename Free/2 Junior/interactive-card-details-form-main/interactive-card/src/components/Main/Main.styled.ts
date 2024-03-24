import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  height: 100vh;
  width: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainSectionCard = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
