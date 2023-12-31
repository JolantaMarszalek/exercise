import styled from "styled-components";

export const InputField = styled.input`
  flex-grow: 1;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  height: 60px;
  width: 150px;
  font-weight: bold;
  cursor: pointer;
  gap: 1rem;
  padding: 2px;
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 32px;
  border: 2px solid var(--neutral-light-grey);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 60px;
    width: 150px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }

  @media (max-width: 375px) {
    height: 60px;
    width: 150px;
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
  height: 60px;
  width: 150px;
  border-radius: 5px;
  padding: 2px;
  /* margin-left: 5px; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 60px;
    width: 150px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }

  @media (max-width: 375px) {
    height: 60px;
    width: 150px;
    gap: 1rem;
    padding: 2px;
    margin: 5px;
  }
`;
