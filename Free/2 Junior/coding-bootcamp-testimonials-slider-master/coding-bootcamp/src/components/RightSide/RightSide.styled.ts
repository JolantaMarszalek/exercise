import styled from "styled-components";

export const RightSideStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: grey;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 600px) {
  }
`;
