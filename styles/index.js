// Externals
import { injectGlobal } from 'styled-components';

// Variables
import { fonts, spaces } from './variables';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* Reset to 10px as a base for rem units! */
  }

  body {
    font-family: ${fonts.primary}, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  button {
    cursor: pointer;
    font-family: ${fonts.primary}, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  sup {
    font-size: 33%;
    line-height: 0;
    position: relative;
    top: -0.5rem;
  }

  /* Basic layout classes */
  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  /* Text utils */
  .t-center {
    text-align: center;
  }
`;
