import styled from 'styled-components';

// icon
import { FiMenu } from 'react-icons/fi';

const LeftHeader = () => {
  return (
    <LeftHeaderContainer>
      <StyledMenu color="var(--black-light)" />
      <div className="logo_wrap">
        <img src="/assets/images/vblog_logo.png" />
      </div>
    </LeftHeaderContainer>
  );
};

export default LeftHeader;

// left 헤더 컨테이너
const LeftHeaderContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  flex: 0 1 1;
  height: 100%;

  > .logo_wrap {
    position: relative;
    width: 170px;
    height: 65px;
    > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    @media ${props => props.theme.breakpoints.mobileSMax} {
      width: 120px;
      height: 50px;
    }
  }
`;

// Menu bar 아이콘
const StyledMenu = styled(FiMenu)`
  font-size: 30px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 24px;
  }
`;
