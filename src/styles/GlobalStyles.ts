import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;  
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
