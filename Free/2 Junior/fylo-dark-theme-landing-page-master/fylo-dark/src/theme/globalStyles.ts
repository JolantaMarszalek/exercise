import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
    font-family: "Raleway", sans-serif;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    margin: 0;
  }

  #root {
  --primary-dark-blue--intro-and-email-sign-up-background: hsl(217, 28%, 15%);
  --primary-dark-blue--main-background: hsl(218, 28%, 13%);
  --primary-dark-blue--footer-background: hsl(216, 53%, 9%);
  --primary-dark-blue--testimonials-background: hsl(219, 30%, 18%);
  
  --accent-cyan--inside-call-to-action-gradient: hsl(176, 68%, 64%);  
  --accent-blue--inside-call-to-action-gradient: hsl(198, 60%, 50%);
  --accent-light-red--error: hsl(0, 100%, 63%);

  --neutral-white: hsl(0, 0%, 100%);
} 
`;
