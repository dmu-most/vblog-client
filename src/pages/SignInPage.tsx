import styled from 'styled-components';

const SignInPage: React.FC = (): JSX.Element => {
  return (
    <SignInContainer>
      <SignInHeader>
        <img src="/assets/images/vblog_logo.png" />
      </SignInHeader>
    </SignInContainer>
  );
};

export default SignInPage;

const SignInContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 100%;
  width: 100%;
`;

const SignInHeader = styled.div`
  margin: 0 auto;
  border-bottom: 2px solid var(--black-hunt);
  width: 275px;
  height: 120px;

  > img {
    height: 100%;
    width: 100%;
  }
`;
