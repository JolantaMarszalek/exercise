import styled from "styled-components";

export const InputField = styled.input`
  display: flex;
  flex-grow: 1;
  font-size: 15px;
  height: 50px;
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  color: var(--light-theme-very-light-gray);
  border-radius: 5px;
  overflow: hidden;
  border: 0;
  ::placeholder {
    background-color: var(--dark-theme-very-dark-desaturated-blue);
    color: var(--color-text);
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 20rem;
  width: 35%;
  height: 80px;
  margin-bottom: 50px;
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  color: var(--color-text);
  border: 0;
  border-radius: 5px;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
`;
