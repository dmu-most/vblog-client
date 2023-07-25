import styled from 'styled-components';

/** 2023/07/25 - 회원가입, 로그인 페이지 로고 - by sineTlsl */
const SignHeader: React.FC = (): JSX.Element => {
  return (
    <SignHeaderContainer>
      <img src="/assets/images/vblog_logo.png" />
    </SignHeaderContainer>
  );
};

export default SignHeader;

const SignHeaderContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 2px solid var(--black-hunt);
  width: 500px;
  height: 120px;

  > img {
    width: 275px;
    height: 120px;
  }
`;
