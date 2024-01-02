import styled from "styled-components";

export const InputSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
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
  height: 40px;
  font-weight: bold;
  border: 1px solid var();
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid var();
  }

  &:active {
    border: 1px solid var();
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
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
  width: 350px;
  height: 50px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
  }
`;
