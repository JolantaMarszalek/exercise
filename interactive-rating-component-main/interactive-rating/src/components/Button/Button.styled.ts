import styled from "styled-components";

export const ButtonStyle = styled.section`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 10vh; */
  /* background: var(--neutral-dark-blue); */
  /* border-radius: 100px; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    margin: 0;
  }
`;

export const ButtonContainer = styled.button`
  height: 40px;
  width: 300px;
  outline: none;
  border: none;
  border-radius: 50px;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--primary-orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--neutral-white);

  &:hover {
    background-color: var(--neutral-white);
    color: var(--primary-orange);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 80px;
    display: block;
  }
`;
