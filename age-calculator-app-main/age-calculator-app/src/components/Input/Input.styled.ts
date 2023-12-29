import styled from "styled-components";

export const InputField = styled.input`
  flex-grow: 1;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  height: 50px;
  width: 100px;
  font-weight: bold;
  cursor: pointer;
  gap: 1rem;
  padding: 2px;
  margin: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 100px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }

  @media (max-width: 375px) {
    height: 50px;
    width: 100px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* min-width: 20rem; */
  height: 80px;
  width: 100px;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 100px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }

  @media (max-width: 375px) {
    height: 80px;
    width: 100px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }
`;
