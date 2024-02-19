import styled from "styled-components";

export const LayoutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: static;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-color: var(--light-pink);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
