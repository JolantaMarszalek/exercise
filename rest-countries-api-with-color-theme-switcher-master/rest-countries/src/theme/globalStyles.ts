import { createGlobalStyle } from "styled-components";
import { Theme } from "./themeStyles";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

#root {
  --dark-blue--dark-mode-elements: hsl(209, 23%, 22%);
  --very-dark-blue--dark-mode-background: hsl(207, 26%, 17%);
  --very-dark-blue--light-mode-text: hsl(200, 15%, 8%);
  --dark-gray--light-mode-input: hsl(0, 0%, 52%);
  --very-light-gray--light-mode-background: hsl(0, 0%, 98%);
  --white--dark-mode-text-and-light-mode-elements: hsl(0, 0%, 100%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
  font-family: "Nunito Sans", sans-serif;
  font-size: 15px;

}


#root {
  --background-color-app: ${({ theme }: { theme: Theme }) =>
    theme.backgroundColor};
  --background-color-elements: ${({ theme }) => theme.backgroundElements};
  --color-text: ${({ theme }) => theme.textColor};
}

header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

}


main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 30px;
  margin: 50px;
  margin-bottom: 20px;
  margin-left: 20px;
}

 input {
  border: none;
  outline: none;
  font-family: inherit;
  background-color: transparent;
}

button {
  cursor: pointer;
}


/* li {
  list-style: none;
} */



/* img {
    width:20px;
    height:20px;
} */

@media (max-width: 375px) {
  :root {
 
  }
}

`;

export default GlobalStyle;
