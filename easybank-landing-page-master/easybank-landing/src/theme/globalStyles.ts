import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import  url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');

body {
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
   
}

#root {
  --primary-dark-blue: hsl(233, 26%, 24%);
  --primary-lime-green: hsl(136, 65%, 51%);
  --primary-bright-cyan: hsl(192, 70%, 51%);
  --neutral-grayish-blue: hsl(233, 8%, 62%);
  --neutral-light-grayish-blue: hsl(220, 16%, 96%);
  --neutral-very-light-gray: hsl(0, 0%, 98%);
  --neutral-white:  hsl(0, 0%, 100%);
} `;
