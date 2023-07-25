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
  fontSizes,
  widthSize,
  size,
  common,
};

export default theme;
