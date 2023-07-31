import styled from 'styled-components';

// components
import LeftHeader from '@components/header/LeftHeader';
import RightHeader from '@components/header/RightHeader';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeader />
      <RightHeader />
    </HeaderContainer>
  );
};

export default Header;

// Header 컨테이너
const HeaderContainer = styled.header`
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 65px;
  background: var(--bg-white);
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--gray-light);
  z-index: 100;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 100%;
    height: 50px;
    padding: 0 1rem;
  }
`;
