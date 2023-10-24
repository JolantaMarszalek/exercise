import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(to left, hsl(192, 70%, 51%), hsl(136, 65%, 51%));
  color: white;
  font-weight: 600;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background: linear-gradient(
      to left,
      hsl(192, 70%, 51%),
      hsl(136, 65%, 51%)
    );
    color: white;
  }

  @media (max-width: 1024px) {
    height: 40px;
    border-radius: 15px;
  }
`;
