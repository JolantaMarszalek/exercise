import styled from "styled-components";

// export const ButtonStyle = styled.section`
//   box-sizing: content-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     width: 100%;
//     margin: 0;
//   }
// `;

export const ButtonRed = styled.button`
  height: 50px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  /* font-weight: bold; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--primary-soft-red);
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
    width: 100px;
    font-size: 0.5rem;
  }
`;
