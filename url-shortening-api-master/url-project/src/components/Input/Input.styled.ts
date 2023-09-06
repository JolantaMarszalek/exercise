import styled from "styled-components";

export const InputField = styled.input`
  border: none;
  height: 40px;
  width: auto;
  outline: none;
  font-size: 16px;
  box-shadow: border-box;
  border-radius: 5px;
  background-color: white;
  color: hsl(240, 1%, 63%);
  /* font-weight: bold; */
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: hsl(240, 1%, 63%);
  /* font-weight: bold; */

  @media (max-width: 1024px) {
    height: 35px;
  }
`;
