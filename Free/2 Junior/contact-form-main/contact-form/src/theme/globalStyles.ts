import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

body {
    font-family: "Karla", sans-serif;
    margin: 0;
    font-size: 16px;
    font-weight: 400,700;
}

#root {
  --primary-green-200-lighter: hsl(148, 38%, 91%);
  --primary-green-600-medium: hsl(169, 82%, 27%);
  --promary-red: hsl(0, 66%, 54%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-grey-500-medium: hsl(186, 15%, 59%);
  --neutral-grey-900-darker: hsl(187, 24%, 22%);
} `;
