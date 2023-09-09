import styled from 'styled-components';

// components
import LoginForm from '@components/sign/LoginForm';
import Oauth from '@components/sign/Oauth';
import LoginHeader from '@components/sign/LoginHeader';

/** 2023/07/25 - 로그인 페이지 - by sineTlsl */
const LoginPage: React.FC = (): JSX.Element => {
  return (
    <LoginContainer>
      <LoginHeader />
      <LoginForm />
      <Oauth />
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 100%;
  width: 100%;
`;
