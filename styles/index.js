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

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  ul {
    list-style: none;
  }

  /* Basic layout classes */
  .h-100 {
    height: 100%;
  }

  .h-100vh {
    height: 100vh;
  }

  .mh-100vh {
    min-height: 100vh;
  }

  /* Text utils */
  .t-center {
    text-align: center;
  }
`;
