import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap');
 
body {
  font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    margin: 0;
  }

  #root {
  --primary-soft-red: hsl(10, 79%, 65%);
  --primary-cyan: hsl(186, 34%, 60%);
  --neutral-dark-brown: hsl(25, 47%, 15%);
  --neutral-medium-brown: hsl(28, 10%, 53%);  
  --neutral-cream: hsl(27, 66%, 92%);
  --neutral-very-pale-orange: hsl(33, 100%, 98%);
} 
`;
