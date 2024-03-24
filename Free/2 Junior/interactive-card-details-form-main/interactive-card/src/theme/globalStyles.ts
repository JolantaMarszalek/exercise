import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px; 
    font-weight: 500;
    margin: 0;
  }

  #root {
  --primary-linear-gradient--active-input-border: linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1;
  --primary-red--input-errors: hsl(0, 100%, 66%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-light-grayish-violet: hsl(270, 3%, 87%);
  --neutral-dark-grayish-violet: hsl(279, 6%, 55%);
  --neutral-very-dark-violet: hsl(278, 68%, 11%);
} 
`;
