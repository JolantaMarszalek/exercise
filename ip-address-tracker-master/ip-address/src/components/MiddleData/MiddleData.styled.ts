import styled from "styled-components";

export const MiddleDataSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  /* width: 850px; */
  margin: auto;
  outline: none;
  padding: 0;
  box-sizing: border-box;
  font-weight: bold;
  border-radius: 15px;
  /* background-color: hsl(54, 98%, 83%); */
  position: relative;
  z-index: 3;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MiddleDataStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(54, 98%, 83%);
`;

export const MiddleDataTitle = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 15px;
`;

export const MiddleDataData = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 25px;
`;
