import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;
  color: var(--neutral-white);
  background-color: var(--primary-marine-blue);

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
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
