import { createGlobalStyle } from 'styled-components';
import colors from './theme';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

    :root {
    ${colors};
  }
  * {
    box-sizing: border-box;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html, body, #root {
    height: 100%;
  }
  html,
  body,
  body > div { /* the react root */
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex-grow: 1;
  }
  body {
    ${({ theme }) => theme.common.flexCol};
    font-family: 'Noto Sans KR', sans-serif;  
  }
  #root {
    display: flex;
  }
  h2 {
    margin: 0;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0 0 0 1.5em;
  }
  li {
    padding: 0;
  }
  b { 
    margin-right: 3px;
  }

  main {
    ${({ theme }) => theme.common.flexCenterRow};
    width: 100%;
    background: var(--white-primary);
    flex-grow: 1; 
    margin-top: 0;
  }

  .header_margin {
    margin-top: 65px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      margin-top: 50px;
    }
  }
`;

export default GlobalStyles;
