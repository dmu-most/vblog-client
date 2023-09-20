import styled from 'styled-components';

// components
import LoginHeader from '@components/sign/LoginHeader';
import SignUpForm from '@components/sign/SignUpForm';

/** 2023/07/25 - 회원가입 페이지 - by sineTlsl */
const SignUpPage: React.FC = (): JSX.Element => {
  return (
    <SignUpContainer>
      <LoginHeader />
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUpPage;

const SignUpContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 100%;
  width: 100%;
`;
