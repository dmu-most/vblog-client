import styled from 'styled-components';

// components
import SignHeader from '@components/sign/SignHeaer';
import SignInForm from '@components/sign/SignInForm';
import Oauth from '@components/sign/Oauth';

/** 2023/07/25 - 로그인 페이지 - by sineTlsl */
const SignInPage: React.FC = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignHeader />
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
