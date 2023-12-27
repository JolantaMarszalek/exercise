import styled from "styled-components";

export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
  }
`;
