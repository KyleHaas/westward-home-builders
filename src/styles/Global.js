import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

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
    font-family: 'Open Sans', sans-serif;
  }

  .section {
      width: 100%;
      padding: 20px;
      text-align: center;
      font-size: 14px;
  }
  
  .section p {
    max-width: 120rem;
    margin auto;
  }

  .section h2{
    font-size: 36px;
    text-decoration: underline;
  }

  .grey{
      background: #2d3436;
  }

  .light-grey { 
      background: #C7C1BA;
  }
`;

export default GlobalStyles;