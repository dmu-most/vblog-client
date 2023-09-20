import styled from 'styled-components';

// components
import LeftHeader from '@components/header/LeftHeader';
import RightHeader from '@components/header/RightHeader';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpaceBetween>
        <LeftHeader />
        <RightHeader />
      </HeaderSpaceBetween>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white-deepdark);
  z-index: 100;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid var(--gray-light);

  @media ${props => props.theme.breakpoints.mobileSMax} {
    height: 50px;
  }
`;

const HeaderSpaceBetween = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.widthSize.contentMaxL}; // 1350px
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;

  // 디바이스 크기가 1580px 클 경우 1500px
  @media ${props => props.theme.breakpoints.desktopLMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxXL};
  }

  // 디바이스 크기가 1439px 보다 작을 경우 1250px
  @media ${props => props.theme.breakpoints.desktopMMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxM};
  }

  // 디바이스 크기가 1250px 보다 작을 경우 1150px
  @media ${props => props.theme.breakpoints.desktopSMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxS};
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 1rem;
  }
`;
