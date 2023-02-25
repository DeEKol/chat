import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;

    background-color: #2c2c2c;
    color: #000000;
  }

  #root {
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  main {
    flex-grow: 1;
  }
  
  ul, li {
    list-style-type: none;
  }
`;
