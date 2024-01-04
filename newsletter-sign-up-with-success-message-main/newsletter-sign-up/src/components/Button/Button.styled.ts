import styled from "styled-components";

export const ButtonStyle = styled.section`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    margin: 0;
  }
`;

export const ButtonContainer = styled.button`
  height: 60px;
  width: 400px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--neutral-white);
  background-color: var(--neutral-dark-slate-grey);

  &:hover {
    background-image: linear-gradient(
      to left,
      var(--primary-tomato),
      hsl(346, 100%, 66%)
    );
    color: var(--neutral-white);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
