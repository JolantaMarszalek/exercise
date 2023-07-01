import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  height:100%;
}

body {
    display: flex;
		flex-direction: column;
    font-family: 'Nunito Sans', sans-serif;
    color: black;
    width: 100%;
    margin: auto; 
    min-height: 100%;
    background-color: white;
    overflow-y: auto;
    position: relative;

    @media (max-width: 650px) {
    font-size: 14px;
  }
}`;
