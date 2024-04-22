import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: var(--neutral-almost-white);
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    /* flex-direction: column-reverse; */
    width: 100%;
  }
`;

export const MainSectionCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;
