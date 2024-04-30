import styled from "styled-components";

export const MiddleStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: black;
  /* background-color: green; */
  height: 800px;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;

    justify-content: space-between;
  }
`;

export const MiddleStyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleStyledCardRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 50%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleStyledCardRightTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleStyledCardRightDescribe = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
