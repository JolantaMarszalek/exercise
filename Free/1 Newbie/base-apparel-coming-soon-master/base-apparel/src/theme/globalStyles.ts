import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

  body {
    font-family: "Josefin Sans", sans-serif;  
    font-style: normal;
    font-size: 16px;
    margin: 0;
  }

  #root {

--primary-desaturated-red: hsl(0, 36%, 70%);
--primary-soft-red: hsl(0, 93%, 68%);
--neutral-dark-grayish-red: hsl(0, 6%, 24%);
--gradients-linear-1: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
--gradients-linear-2: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  }
`;
