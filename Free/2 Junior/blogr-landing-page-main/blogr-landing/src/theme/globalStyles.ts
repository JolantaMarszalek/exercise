import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')
;

body {
    font-family: "Overpass", sans-serif;

    font-family: "Ubuntu", sans-serif;

    font-size: 16px;
    margin: 0;
}

#root {
  --primary-light-red--CTA-text: hsl(356, 100%, 66%);
  --primary-very-light-red--CTA-hover-bg: hsl(355, 100%, 74%);
  --primary-very-dark-blue--headingh: hsl(208, 49%, 24%);

  --neutral-white--text: hsl(0, 0%, 100%);
  --neutral-grayish-blue--footer-text: hsl(240, 2%, 79%);
  --neutral-very-dark-grayish-blue--body-cope: hsl(207, 13%, 34%);
  --neutral-dark-black-blue--footer-background: hsl(240, 10%, 16%);

 --gradient-bg-intro-CTA-mobile--very-light-red: hsl(13, 100%, 72%);
 --gradient-bg-intro-CTA-mobile--light-red: hsl(353, 100%, 62%);
 
 --gradient-bg-body--very-dark-gray-blue: hsl(237, 17%, 21%);
 --gradient-bg-body--very-dark-desaturated-blue:hsl(237, 23%, 32%);
} `;
