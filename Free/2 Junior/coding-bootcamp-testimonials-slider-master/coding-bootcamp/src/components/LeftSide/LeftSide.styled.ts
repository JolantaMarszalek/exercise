import styled from "styled-components";

export const LeftSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;
