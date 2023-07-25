import styled from 'styled-components';

// components
import SignInForm from '@components/signin/SignInForm';
import Oauth from '@components/signin/Oauth';

/** 2023/07/25 - 로그인 페이지 - by sineTlsl */
const SignInPage: React.FC = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignInHeader>
        <img src="/assets/images/vblog_logo.png" />
      </SignInHeader>
      <SignInForm />
      <Oauth />
    </SignInContainer>
  );
};

export default SignInPage;

const SignInContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 100%;
  width: 100%;
`;

// ===================== 로그인 페이지 로고 =====================
const SignInHeader = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 2px solid var(--black-hunt);
  width: 500px;
  height: 120px;

  > img {
    width: 275px;
    height: 120px;
  }
`;
