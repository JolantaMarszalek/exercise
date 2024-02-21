import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    margin: 0;
  }

  #root {
  --primary-red: hsl(0, 100%, 74%);
  --primary-green: hsl(154, 59%, 51%);
  --accent-blue: hsl(248, 32%, 49%);
  --neutral-dark-blue: hsl(249, 10%, 26%);
  --neutral-grayish-blue: hsl(246, 25%, 77%);
} 
`;
