import styled from "styled-components";

export const InputField = styled.input`
  border: none;
  height: 45px;
  width: auto;
  outline: none;
  font-size: 16px;
  box-shadow: border-box;
  border-radius: 10px;
  background-color: white;
  color: var(--neutral-grayish-violet);
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
    height: 40px;
  }
`;
