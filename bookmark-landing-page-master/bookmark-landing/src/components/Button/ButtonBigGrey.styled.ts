import styled from "styled-components";

export const ButtonBigGrey = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: hsl(0, 0%, 95%);
  color: var(--neutral-grayish-blue);
  /* margin-top: 25px; */

  /* &:hover {
    background-image: linear-gradient(
      to left,
      var(--primary-soft-red),
      hsl(346, 100%, 66%)
    );
    color: var(--neutral-very-dark-blue);
  } */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    width: 200px;
    /* font-size: 0.5rem; */
  }
`;
