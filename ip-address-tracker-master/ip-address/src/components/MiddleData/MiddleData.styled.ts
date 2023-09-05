import styled from "styled-components";

export const MiddleDataSection = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  font-weight: bold;
  text-align: center;
  position: absolute;
  right: 50%;
  left: 50%;
  z-index: 2;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const MiddleDataStyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background-color: hsl(54, 98%, 83%);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    background-color: gray;
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
      height: 1px;
      background-color: gray;
    }
  }
`;

export const MiddleDataStyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  background-color: hsl(54, 98%, 83%);

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
  background-color: hsl(54, 98%, 83%);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    background-color: gray;
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
      height: 1px;
      background-color: grey;
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
`;
