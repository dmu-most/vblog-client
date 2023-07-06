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
  contentMax: '1024px',
};

const colors = {};

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
