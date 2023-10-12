import styled from "styled-components";

export const TodoBarForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  color: var(--light-theme-very-light-gray);
  margin-top: -40px;
`;

export const TodoOneForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--light-theme-very-light-gray);
  height: auto;
  width: 700px;
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  padding-left: 20px;
  position: relative;
  padding-right: 20px;
  border-radius: 5px;

  li {
    display: flex;
    align-items: center;
    width: 700px;
    height: 50px;
    margin: 1px;
    background-color: var(--dark-theme-very-dark-desaturated-blue);
    border-radius: 5px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
  }

  li::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
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
