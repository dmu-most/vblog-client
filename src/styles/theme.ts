import { css } from "styled-components";

const size = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1025px',
};

const breakpoints = {
  mobileMax: `screen and (max-width: ${size.mobile})`,
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
  --white-primary: #FFFFFF;
  --white-dark: #F8FAFC;
  --white-deepdark: #F1F5F9;
  --gray-light: #E5E7EB;
  --gray-primary: #D1D5DB;
  --gray-dark: #9CA3AF;
  --black-primary: #020617;
  --black-light: #0F172A;
  --black-deeplight: #1E293B;
  //hunt-color
  --black-hunt: #212121;
  --green-hunt: #6D9886;
  --brown-hunt: #D9CAB3;
  --white-hunt: #F6F6F6;
  //adobe-color
  --adobe-color1: #A5E5CB;
  --adobe-color2: #47AA81;
  --adobe-color3: #6D9886;
  --adobe-color4: #60E5AE;
  --adobe-color5: #49665A;
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
