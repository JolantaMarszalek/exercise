import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');
body {
    font-family: 'Red Hat Text', sans-serif;
    font-size: 14px;
    margin: 0;
   
}

#root {
  --primary-grayish-blue: hsl(237, 18%, 59%);
  --primary-soft-red:  hsl(345, 95%, 68%);
  --neutral-white:  hsl(0, 0%, 100%);
  --neutral-dark-desaturated-blue: hsl(236, 21%, 26%);
  --neutral-very-dark-blue: hsl(235, 16%, 14%);
  --neutral-very-dark-blue-mostly-black: hsl(234, 17%, 12%);
  
} `;
