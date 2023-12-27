import styled from "styled-components";

export const InputField = styled.input`
  flex-grow: 1;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  height: 40px;
  font-weight: bold;
  border: 1px solid var(--neutral-cool-gray);
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid var(--primary-purplish-blue);
  }

  &:active {
    border: 1px solid var(--primary-purplish-blue);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 40px;
  }

  @media (max-width: 576px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 70%;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 20rem;
  width: 100%;
  height: 50px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 40px;
  }
`;
