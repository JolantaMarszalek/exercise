import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap');
body {
    font-family: 'Commissioner', sans-serif;
    font-size: 16px;
    margin: 0;
}

#root {
  --primary-moderate-cyan: hsl(176, 50%, 47%);
  --primary-dark-cyan: hsl(176, 72%, 28%);
  --neutral-black: hsl(0, 0%, 0%);
  --neutral-dark-gray: hsl(0, 0%, 48%);
} `;
