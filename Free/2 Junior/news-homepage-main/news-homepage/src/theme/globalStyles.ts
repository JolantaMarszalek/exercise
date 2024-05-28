import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
   font-family: "Inter", sans-serif;
   font-style: normal;
   font-size: 15px;
   margin: 0;
}

#root {
  --primary-soft-orange: hsl(35, 77%, 62%);
  --primary-soft-red: hsl(5, 85%, 63%);
  --neutral-off-white: hsl(36, 100%, 99%);
  --neutral-grayish-blue: hsl(233, 8%, 79%);
  --neutral-dark-grayish-blue: hsl(236, 13%, 42%);
  --neutral-very-dark-blue: hsl(240, 100%, 5%);
} `;
