import styled from "styled-components";

export const LayoutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: static;
  width: 100%;
  height: 100vh;
  background-color: var(--light-pink);
  top: 0;

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
