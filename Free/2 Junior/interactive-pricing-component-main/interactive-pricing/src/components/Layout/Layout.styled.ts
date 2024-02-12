import styled from "styled-components";

export const LayoutSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-very-pale-blue--main-background);

  @media (max-width: 700px) {
    width: auto;
  }

  @media (max-width: 375px) {
    width: auto;
  }
`;
