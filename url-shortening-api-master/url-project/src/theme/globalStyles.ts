import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --primary-cyan: hsl(180, 66%, 49%);
  --primary-dark-violet: hsl(257, 27%, 26%);
  --secondary-red: hsl(0, 87%, 67%);
  --neutral-gray:hsl(0, 0%, 75%);
  --neutral-grayish-violet: hsl(257, 7%, 63%);
  --neutral-very-dark-blue:hsl(255, 11%, 22%);
  --neutral-very-dark-violet:hsl(260, 8%, 14%);
}

html {
  scroll-behavior: smooth;
  height:100%;
}

body {
    display: flex;
		flex-direction: column; 
    font-family: 'Poppins', sans-serif;
    color: black;
    width: 100%;
    margin: auto; 
    min-height: 100%;
    background-color: white;
    overflow-y: auto;
    position: relative;
    /* font-weight: bold; */
    font-size:18px;

    @media (max-width: 650px) {
    font-size: 14px;
  }
}`;
