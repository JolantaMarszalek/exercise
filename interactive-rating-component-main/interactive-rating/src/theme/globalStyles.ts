import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');


  body {
    font-family: 'Overpass', sans-serif;
    font-size: 15px;
    margin: 0;
  }

  #root {
  --primary-orange: hsl(25, 97%, 53%);
  --neutral-white:  hsl(0, 0%, 100%);
  --neutral-light-grey:  hsl(217, 12%, 63%);
  --neutral-medium-grey:  hsl(216, 12%, 54%);
  --neutral-dark-blue:  hsl(213, 19%, 18%);
  --neutral-very-dark-blue:  hsl(216, 12%, 8%);
} 
`;
