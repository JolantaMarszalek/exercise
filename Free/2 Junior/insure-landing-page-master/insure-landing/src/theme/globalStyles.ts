import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

body {
    font-family: "DM Serif Display", serif;
    font-family: "Karla", sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #root {
  --primary-dark-violet: hsl(256, 26%, 20%);
  --primary-grayish-blue: hsl(216, 30%, 68%);
  --neutral-very-dark-violet: hsl(270, 9%, 17%);
  --neutral-dark-grayish-violet: hsl(273, 4%, 51%);
  --neutral-very-light-gray: hsl(0, 0%, 98%);
} 
`;
