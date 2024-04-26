import styled from "styled-components";

export const BottomStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: black;
  background-color: pink;
  height: 200px;
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BottomStyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
