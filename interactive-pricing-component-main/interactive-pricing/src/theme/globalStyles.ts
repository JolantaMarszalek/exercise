import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

body {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    margin: 0;
   
}

#root {
  --primary-soft-cyan--full-slider-bar: hsl(174, 77%, 80%);
  --primary-strong-cyan--slider-background: hsl(174, 86%, 45%);
  --primary-light-grayish-red--discount-background: hsl(14, 92%, 95%);
  --primary-red--discount-text: hsl(15, 100%, 70%);
  --primary-pale-blue--CTA-text: hsl(226, 100%, 87%);
  --neutral-white--pricing-component-background: hsl(0, 0%, 100%);
  --neutral-very-pale-blue--main-background: hsl(230, 100%, 99%);
  --neutral-light-grayish-blue--empty-slider-bar: hsl(224, 65%, 95%);  
  --neutral-light-grayish-blue--toggle-background: hsl(223, 50%, 87%); 
  --neutral-grayish-blue--text: hsl(225, 20%, 60%);
  --neutral-dark-desaturated-blue--text-CTA-background: hsl(227, 35%, 25%);
} `;
