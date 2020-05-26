import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap');

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
    font-family: 'Work Sans', sans-serif;
    rgba(0,0,0,0.95);
  }

  .section {
      width: 100%;
      padding: 50px;
      text-align: center;
      font-size: 14px;
  }
  
  .section p {
    max-width: 120rem;
    margin auto;
  }

  .section h2{
    font-weight: 200;
    font-size: 42px;
  }

  .grey{
      background: #2d3436;
  }

  .light-grey { 
      background: #C7C1BA;
  }
`;

export default GlobalStyles;