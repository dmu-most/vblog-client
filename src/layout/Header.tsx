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
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 1rem;
  }
`;
