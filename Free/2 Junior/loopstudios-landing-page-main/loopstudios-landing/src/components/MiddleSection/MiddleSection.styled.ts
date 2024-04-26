import styled from "styled-components";

export const MiddleStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: black;
  background-color: green;
  height: 200px;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MiddleStyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
