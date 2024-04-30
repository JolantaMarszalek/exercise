import styled from "styled-components";

export const MiddleStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: black;
  /* background-color: green; */
  height: 800px;
  width: 100%;
  align-items: center;
  position: relative;

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
  z-index: 1;
  margin-left: 100px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 100px;

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
  justify-content: center;
  padding: 50px;
  z-index: 2;
  margin-right: 100px;
  background-color: var(--primary-white);
  position: absolute;
  bottom: -50px;
  right: 0;
  margin-right: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleStyledCardRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MiddleStyledCardRightDescribe = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-dark-gray);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
