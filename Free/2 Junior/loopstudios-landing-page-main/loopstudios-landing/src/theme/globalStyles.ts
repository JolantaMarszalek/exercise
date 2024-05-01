import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
   font-family: "Alata", sans-serif;
   /* font-weight: 400; */
   font-family: "Josefin Sans", sans-serif;
   font-optical-sizing: auto;
   /* font-weight: 300; */
   font-style: normal;
   font-size: 18px;
   margin: 0;
}

#root {
  --primary-white: hsl(0, 0%, 100%);
  --primary-black: hsl(0, 0%, 0%);
  --primary-dark-gray: hsl(0, 0%, 55%);
  --primary-dark-gray: hsl(0, 0%, 41%); 
} `;
