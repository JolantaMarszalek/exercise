import styled from "styled-components";

export const MainStyled = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 600px) {
  }
`;
