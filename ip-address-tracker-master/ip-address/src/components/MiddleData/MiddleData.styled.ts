import styled from "styled-components";

export const MiddleDataSection = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin-top: -40px;
  padding: 0;
  box-sizing: border-box;
  font-weight: bold;
  text-align: center;
  position: absolute;
  right: 50%;
  left: 50%;
  z-index: 2;

  @media (max-height: 740px) {
    /* margin-top: 100px; */
    height: 10vh;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const MiddleDataStyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background-color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 2px;
    background-color: lightgray;
    height: 70%;
  }

  @media (max-height: 740px) {
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0 0;
    border-right: none;

    ::after {
      content: "";
      position: sticky;
      bottom: 0;
      width: 70%;
      height: 2px;
      background-color: lightgray;
    }
  }
`;

export const MiddleDataStyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  background-color: white;

  @media (max-height: 740px) {
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 20px 20px;
  }
`;

export const MiddleDataStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 2px;
    background-color: lightgray;
    height: 70%;
  }

  @media (max-height: 740px) {
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    border-right: none;

    ::after {
      content: "";
      position: sticky;
      bottom: 0;
      width: 70%;
      height: 2px;
      background-color: lightgray;
    }
  }
`;

export const MiddleDataTitle = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const MiddleDataData = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 25px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
