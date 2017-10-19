// Externals
import { injectGlobal } from 'styled-components';

// Variables
import { fonts, spaces } from './variables';

injectGlobal`
  /* Font faces */
  @font-face {
    font-family: ${fonts.primary};
    src: url('/static/fonts/AvenirNext-Regular.ttf');
  }

  @font-face {
    font-family: ${fonts.primary};
    src: url('/static/fonts/AvenirNext-Bold.ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: ${fonts.primary};
    src: url('/static/fonts/AvenirNext-UltraLight.ttf');
    font-weight: 200;
  }

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
    touch-action: manipulation;
  }

  body {
    font-family: ${fonts.primary}, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  img {
    max-width: 100%;
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

  li > ul {
    padding-left: ${spaces.md}px;
    padding-top: ${spaces.sm}px;
  }

  pre {
    white-space: pre-wrap;
  }

  /* Basic layout classes */
  .hidden {
    display: none;
  }

  .h-100 {
    height: 100%;
  }

  .h-100vh {
    height: 100vh;
  }

  .mh-100vh {
    min-height: 100vh;
  }

  .flex {
    display: flex;
  }

  .f-1 {
    flex: 1;
  }

  .fd-column {
    flex-direction: column;
  }

  .jc-center {
    justify-content: center;
  }

  .jc-space-between {
    justify-content: space-between;
  }

  .jc-end {
    justify-content: flex-end;
  }

  /* Text utils */
  .t-center {
    text-align: center;
  }

  /* Spacer utils */
  .mb-xs {
    margin-bottom: ${spaces.xs}px;
  }

  .mb-sm {
    margin-bottom: ${spaces.sm}px;
  }

  .mb-md {
    margin-bottom: ${spaces.md}px;
  }

  .mb-lg {
    margin-bottom: ${spaces.lg}px;
  }

  .mb-xl {
    margin-bottom: ${spaces.xl}px;
  }

  .mb-xxl {
    margin-bottom: ${spaces.xxl}px;
  }

  .mr-xs {
    margin-right: ${spaces.xs}px;
  }

  .mr-sm {
    margin-right: ${spaces.sm}px;
  }

  .pt-xl {
    padding-top: ${spaces.xl}px;
  }

  .pb-xl {
    padding-bottom: ${spaces.xl}px;
  }

  .plr-md {
    padding-left: ${spaces.md}px;
    padding-right: ${spaces.md}px;
  }

  .plr-lg {
    padding-left: ${spaces.lg}px;
    padding-right: ${spaces.lg}px;
  }

  .plr-xl {
    padding-left: ${spaces.xl}px;
    padding-right: ${spaces.xl}px;
  }
`;
