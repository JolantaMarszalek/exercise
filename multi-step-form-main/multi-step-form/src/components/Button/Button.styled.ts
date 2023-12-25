import styled from "styled-components";

export const ButtonDarkStyle = styled.button`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  font-weight: bold;
  color: var(--neutral-white);
  background-color: var(--primary-marine-blue);
  display: block;

  /* @media (max-width: 1024px) {
    height: 40px;
    border-radius: 15px;
  } */
`;

export const ButtonDarkSecondStyle = styled.button`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  font-weight: bold;
  color: var(--neutral-white);
  background-color: var(--primary-purplish-blue);
  display: block;

  /* @media (max-width: 1024px) {
    height: 40px;
    border-radius: 15px;
  } */
`;

export const ButtonLightStyle = styled.button`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  font-weight: bold;
  color: var(--neutral-cool-gray);
  background-color: white;
  display: block;
  text-align: left;

  /* @media (max-width: 1024px) {
    height: 40px;
    border-radius: 15px;
  } */
`;

export const ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  height: 10vh;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
