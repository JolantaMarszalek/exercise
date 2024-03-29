import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

body {
    font-family: 'Manrope', sans-serif;
    font-size: 25px;
    background-color: var(--neutral-grayish-blue);
    margin: 0;
}

#root {
  --primary-light-cyan: hsl(193, 38%, 86%);
  --primary-neon-green: hsl(150, 100%, 66%);
  --neutral-grayish-blue: hsl(217, 19%, 38%);
  --neutral-dark-grayish-blue: hsl(217, 19%, 24%);
  --neutral-dark-blue: hsl(218, 23%, 16%);
} `;
