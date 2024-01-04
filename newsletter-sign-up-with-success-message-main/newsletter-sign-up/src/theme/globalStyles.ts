import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #root {
  --primary-tomato: hsl(4, 100%, 67%);
  --neutral-dark-slate-grey: hsl(234, 29%, 20%);
  --neutral-charcoal-grey: hsl(235, 18%, 26%);
  --neutral-grey: hsl(231, 7%, 60%);
  --neutral-white: hsl(0, 0%, 100%);
} 
`;
