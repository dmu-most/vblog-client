import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/** 2023/07/25 - 회원가입, 로그인 페이지 로고 - by sineTlsl */
const LoginHeader: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  /** 2023/08/18 - 로고 클릭 시 메인페이지로 이동 - by sineTlsl */
  const handlerGoMain = () => {
    navigate('/');
  };

  return (
    <LoginHeaderContainer>
      <button onClick={handlerGoMain}>
        <img src="/assets/images/vblog_logo.png" />
      </button>
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

  > button {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  > button > img {
    width: 275px;
    height: auto;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding: 0 2rem;
    border-bottom: none;

    > img {
      width: 235px;
      height: auto;
    }
  }
`;
