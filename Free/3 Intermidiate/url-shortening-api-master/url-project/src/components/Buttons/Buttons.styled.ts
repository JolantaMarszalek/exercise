import styled from "styled-components";

export const ButtonS = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--primary-cyan);
  color: white;
  font-weight: 600;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background-color: var(--primary-cyan);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 40px;
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
  background-color: var(--primary-cyan);
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: var(--primary-cyan);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 40px;
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
  background-color: var(--primary-cyan);
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;

  :hover {
    cursor: pointer;
    background-color: var(--primary-cyan);
    color: white;
  }

  @media (max-width: 1024px) {
    height: 40px;
    width: 225px;
    border-radius: 5px;
  }

  @media (max-width: 650px) {
    height: 40px;
    width: 225px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;
