import styled from "styled-components";

export const InputField = styled.input`
  flex-grow: 1;
  font-size: 15px;
  color: black;
  border-radius: 5px;
  overflow: hidden;
  ::placeholder {
    background-color: var(--background-color-app);
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
  height: 50px;
  margin: 20px;
  margin-left: 50px;
  background-color: var(--background-color-app);
  img {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
`;
