import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', sans-serif
    rgba(0,0,0,0.95);
  }

  .section {
      width: 100%;
      padding: 50px;
      text-align: center;
      font-size: 14px;
  }

  .section-inner {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .section p {
    max-width: 120rem;
    margin auto;
  }

  .section h2{
    font-weight: 100;
    font-size: 42px;
    padding: 7rem 0;
  }

  .grey{
      background: #2d3436;
  }

  .light-grey { 
      background: #C7C1BA;
  }
`;

export default GlobalStyles;