import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    font-family: "Libre Franklin", sans-serif;
    font-size: 20px;
    margin: 0;
  }

  #root {
  --primary-blue: hsl(223, 87%, 63%);
  --secondary-pale-blue: hsl(223, 100%, 88%);
  --secondary-light-red: hsl(354, 100%, 66%);
  --neutral-gray: hsl(0, 0%, 59%);
  --neutral-very-dark-blue: hsl(209, 33%, 12%);
} 
`;
