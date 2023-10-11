import styled from "styled-components";
// import { Input } from "../Input/Input.component";

// export const TodoInput = styled(Input)`
//   label {
//     color: var(--light-theme-very-light-gray);
//     flex-grow: 3;
//   }
// `;

export const TodoBarForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  color: var(--light-theme-very-light-gray);
`;
export const TodoOneForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--light-theme-very-light-gray);
  font-size: 15px;
  height: auto;

  /* background-color: var(--dark-theme-very-dark-desaturated-blue); */
  color: var(--light-theme-very-light-gray);

  li {
    width: 300px;
    height: 50px;
    margin: 10px;
    background-color: var(--dark-theme-very-dark-desaturated-blue);
  }
`;

export const TodoBarSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-theme-very-light-gray);
  background: var(--dark-theme-very-dark-desaturated-blu);

  @media (max-width: 75em) {
    > * {
      flex-shrink: 1;
    }
  }
`;
