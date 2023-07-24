import { css } from 'styled-components';

const size = {
  mobileS: '475px',
  mobileL: '768px',
  tablet: '1024px',
  desktop: '1025px',
};

const breakpoints = {
  mobileSMax: `screen and (max-width: ${size.mobileS})`,
  mobileLMax: `screen and (max-width: ${size.mobileL})`,
  tabletMax: `screen and (max-width: ${size.tablet})`,
  desktopMin: `screen and (max-width: ${size.desktop})`,
};

const widthSize = {
  contentMax: '1350px',
};

// 사용 예시 : background-color: var(--white-primary);
// 원하는 컬러가 있다면 여기서 추가하시고 사용해주시길 바랍니다(주석처리 필수)

const colors = css`
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
`;

// 폰트 크기
const fontSizes = {};

const common = {
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  flexCenterCol: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  flexCenterRow: `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
  flexCol: `
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
};

const theme = {
  breakpoints,
  colors,
  fontSizes,
  widthSize,
  size,
  common,
};

export default theme;
