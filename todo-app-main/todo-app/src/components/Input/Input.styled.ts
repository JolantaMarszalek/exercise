import styled from "styled-components";

export const InputField = styled.input`
  display: flex;
  flex-grow: 1;
  font-size: 15px;
  height: 50px;
  width: 700px;
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  color: var(--light-theme-very-light-gray);
  overflow: hidden;
  border-radius: 10px;
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
  width: auto;
  height: auto;
  margin-top: -150px;
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  color: var(--color-text);
  border-radius: 5px;
  border: 0;
`;
