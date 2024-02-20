import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  body {
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #root {
--white: hsl(0, 0%, 100%);
--light-pink: hsl(275, 100%, 97%);
--grayish-purple: hsl(292, 16%, 49%);
--dark-purple: hsl(292, 42%, 14%);
  }
`;
