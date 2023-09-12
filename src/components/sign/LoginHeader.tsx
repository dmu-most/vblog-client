import styled from 'styled-components';

/** 2023/07/25 - 회원가입, 로그인 페이지 로고 - by sineTlsl */
const LoginHeader: React.FC = (): JSX.Element => {
  return (
    <LoginHeaderContainer>
      <img src="/assets/images/vblog_logo.png" />
    </LoginHeaderContainer>
  );
};

export default LoginHeader;

const LoginHeaderContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 2px solid var(--black-hunt);
  max-width: 500px;
  width: 100%;
  height: 120px;

  > img {
    width: 275px;
    height: auto;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 2rem;
    border-bottom: none;

    > img {
      width: 235px;
      height: auto;
    }
  }
`;