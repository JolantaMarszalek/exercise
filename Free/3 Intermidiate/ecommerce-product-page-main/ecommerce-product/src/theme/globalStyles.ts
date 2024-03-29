import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    margin: 0;
}

#root {
  --primary-orange: hsl(26, 100%, 55%);
  --primary-pale-orange: hsl(25, 100%, 94%);
  --neutral-very-dark-blue: hsl(220, 13%, 13%);
  --neutral-dark-grayish-blue: hsl(219, 9%, 45%);
  --neutral-grayish-blue: hsl(220, 14%, 75%);
  --neutral-light-grayish-blue: hsl(223, 64%, 98%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-black: hsl(0, 0%, 0%);
} `;
