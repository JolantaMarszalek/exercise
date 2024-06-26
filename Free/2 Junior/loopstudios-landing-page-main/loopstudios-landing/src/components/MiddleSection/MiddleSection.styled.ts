import styled from "styled-components";

export const MiddleStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: black;
  height: 800px;
  width: 100%;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  position: absolute;
  top: 50;
  left: 0;
  margin-left: 150px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;
    width: 80%;
    margin-top: 50px;
  }
`;

export const MiddleStyledCardRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 45%;
  justify-content: center;
  z-index: 2;
  margin-right: 100px;
  background-color: var(--primary-white);
  position: absolute;
  bottom: -50px;
  right: 0;
  margin-right: 150px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;
    width: 80%;
  }
`;

export const MiddleStyledCardRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 300;
  padding-left: 100px;
  padding-top: 50px;
  padding-right: 100px;
  padding-bottom: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }
`;

export const MiddleStyledCardRightDescribe = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-dark-gray);
  padding: 50px;
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 10px;
  padding-bottom: 50px;
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }
`;
