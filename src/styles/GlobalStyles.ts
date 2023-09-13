import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  // 사용 예시 : background-color: var(--white-primary);
  // 원하는 컬러가 있다면 여기서 추가하시고 사용해주시길 바랍니다(주석처리 필수)
  :root {
  // tailwind-color
    --white-primary: #ffffff;
    --white-dark: #f8fafc;
    --white-deepdark: #f9f9fa;
    --gray-light: #ebebeb;
    --gray-primary: #d8d9db;
    --gray-dark: #adb0b6;
    --black-primary: #020617;
    --black-light: #45474b;
    --black-deeplight: #1e293b;
    //hunt-color
    --black-hunt: #212121;
    --green-hunt: #6d9886;
    --brown-hunt: #d9cab3;
    --white-hunt: #f6f6f6;
    //adobe-color
    --adobe-color1: #a5e5cb;
    --adobe-color2: #47aa81;
    --adobe-color3: #6d9886;
    --adobe-color4: #60e5ae;
    --adobe-color5: #49665a;
    //background
    --bg-white: #f9f9f9;
    --bg-green: #FAFAF7;
    --bg-brown: #faf4eb;
    // deep
    --deep-green: #71877e;
    //tag-color
    --tag-pink: #F2E1E9;
    --tag-blue: #D6E4EE;
    --tag-purple: #F2E1E9;
    --tag-green: #DEECDD;
    --tag-mint: #8DDFCB;
    --tag-beige: #FFF2CC;
    --tag-yellow: #FFD966;
    --tag-orange: #F4B183;
    --tag-peach: #DFA67B;
    //icon-color
    --icon-red:  #FE0000;
    --icon-navy: #4A55A2;
    --icon-blue: #0002A1;
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
    background-color: var(--bg-green);
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background: var(--bg-green);
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
