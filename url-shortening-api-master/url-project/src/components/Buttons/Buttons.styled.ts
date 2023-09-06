import styled from "styled-components";

export const ButtonS = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: hsl(180, 66%, 49%);
  color: white;
  font-weight: 600;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const ButtonM = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 30px;
  padding: 0;
  box-sizing: border-box;
  background-color: hsl(180, 66%, 49%);
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const ButtonSquare = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  background-color: hsl(180, 66%, 49%);
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
`;
