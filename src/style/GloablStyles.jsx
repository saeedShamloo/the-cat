import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    font-family: sans-serif, Arial, Roboto, Helvetica;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  `;

export default GlobalStyles;
