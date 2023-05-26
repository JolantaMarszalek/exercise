import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    min-height: 100%;
    position: relative;

    @media (max-width: 650px) {
    font-size: 14px;
  }
}`;
