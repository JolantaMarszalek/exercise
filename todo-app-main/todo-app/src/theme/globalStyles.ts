import { createGlobalStyle } from "styled-components";
// import { Theme } from "./themeStyles";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

#root {
--primary-bright-blue: hsl(220, 98%, 61%);
--primary-check-background: linear-gradient(to left, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
--light-theme-very-light-gray: hsl(0, 0%, 98%);
--light-theme-very-light-grayish-blue: hsl(236, 33%, 92%);
--light-theme-light-grayish-blue: hsl(233, 11%, 84%);
--light-theme-dark-grayish-blue: hsl(236, 9%, 61%);
--light-theme-very-dark-grayish-blue: hsl(235, 19%, 35%);
--dark-theme-very-dark-blue: hsl(235, 21%, 11%);
--dark-theme-very-dark-desaturated-blue: hsl(235, 24%, 19%);
--dark-theme-light-grayish-blue: hsl(234, 39%, 85%);
--dark-theme-light-grayish-blue-hover: hsl(236, 33%, 92%);
--dark-theme-dark-grayish-blue: hsl(234, 11%, 52%);
--dark-theme-very-dark-grayish-blue: hsl(233, 14%, 35%);
--dark-theme-very-dark-grayish-blue: hsl(237, 14%, 26%);
}

body {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  margin:0;
  
}

@media (max-width: 375px) {
  :root {
 
  }
}
`;
