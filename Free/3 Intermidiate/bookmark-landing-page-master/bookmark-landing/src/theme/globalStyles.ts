import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    margin: 0;
  }

  #root {
  --primary-soft-blue: hsl(231, 69%, 60%);
  --primary-soft-red: hsl(0, 94%, 66%);
  --neutral-grayish-blue: hsl(229, 8%, 60%);
  --neutral-very-dark-blue: hsl(229, 31%, 21%);
} 
`;
