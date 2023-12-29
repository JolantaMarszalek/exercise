import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 80px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  font-weight: bold;

  background-color: var(--primary-purple);
  display: block;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 80px;
    border-radius: 100px;
    display: block;
  }
`;

export const ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // margin: auto;
  height: 10vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
  }
`;
