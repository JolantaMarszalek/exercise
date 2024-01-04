import styled from "styled-components";

export const InputSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: 100%;
`;

export const InputField = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  flex-grow: 1;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  height: 57px;
  width: 400px;
  font-weight: bold;
  border: 1px solid var(--neutral-grey);
  cursor: pointer;
  padding-left: 15px;

  &:hover,
  &:focus {
    border: 1px solid var(--neutral-grey);
  }

  &:active {
    border: 1px solid var();
  }

  &.error {
    background-color: red;
    border: 1px solid red;
  }

  &.error {
    background-color: hsl(5, 100%, 95%);
    border: 1px solid var(--primary-tomato);
    color: var(--primary-tomato);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  gap: 1rem;
  min-width: 20rem;
  /* width: 350px; */
  height: 60px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 40px; */
  }
`;
