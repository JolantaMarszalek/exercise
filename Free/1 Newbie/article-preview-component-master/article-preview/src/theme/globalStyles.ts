import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap');

  body {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    margin: 0;
    background-color: hsl(210, 46%, 95%);
  }

  #root {
--very-dark-grayish-blue: hsl(217, 19%, 35%);
--desaturated-dark-blue: hsl(214, 17%, 51%);
--grayish-blue: hsl(212, 23%, 69%);
--light-grayish-blue: hsl(210, 46%, 95%);
  }
`;
