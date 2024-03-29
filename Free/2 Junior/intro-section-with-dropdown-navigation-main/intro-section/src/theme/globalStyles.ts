import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
    font-family: "Epilogue", sans-serif;
    font-size: 18px;
    margin: 0;
}

#root {
  --neutral-almost-white: hsl(0, 0%, 98%);
  --neutral-medium-gray: hsl(0, 0%, 41%);
  --neutral-almost-black: hsl(0, 0%, 8%);  
} `;
