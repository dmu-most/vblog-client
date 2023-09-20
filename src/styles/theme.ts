const size = {
  mobileS: '475px',
  mobileL: '768px',
  tablet: '1024px',
  desktopS: '1250px',
  desktopM: '1439px',
  desktopL: '1580px',
};

const breakpoints = {
  mobileSMax: `screen and (max-width: ${size.mobileS})`,
  mobileLMax: `screen and (max-width: ${size.mobileL})`,
  tabletMax: `screen and (max-width: ${size.tablet})`,
  desktopSMax: `screen and (max-width: ${size.desktopS})`,
  desktopMMax: `screen and (max-width: ${size.desktopM})`,
  desktopLMax: `screen and (min-width: ${size.desktopL})`,
};

const widthSize = {
  contentMaxS: '1150px',
  contentMaxM: '1250px',
  contentMaxL: '1350px',
  contentMaxXL: '1500px',
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

  flexRow: `
      display: flex;
      flex-direction: row;
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
