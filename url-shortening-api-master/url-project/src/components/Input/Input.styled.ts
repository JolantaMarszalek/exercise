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
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--neutral-grayish-violet);

  @media (max-width: 1024px) {
    height: 40px;
  }
`;
