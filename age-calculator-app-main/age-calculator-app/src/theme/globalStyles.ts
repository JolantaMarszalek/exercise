import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400;1,800&display=swap');
body {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    margin: 0;
}

#root {
  --primary-purple: hsl(259, 100%, 65%);
  --primary-light-red: hsl(0, 100%, 67%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-off-white: hsl(0, 0%, 94%);
  --neutral-light-grey: hsl(0, 0%, 86%);
  --neutral-smokey-grey: hsl(0, 1%, 44%);
  --neutral-off-black: hsl(0, 0%, 8%);
} `;
