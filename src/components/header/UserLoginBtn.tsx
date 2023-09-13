import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/** 2023/09/09 - 헤더 회원 로그인 버튼 컴포넌트 - by sineTlsl */
const UserLoginBtn: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  /** 2023/09/09 - 회원가입 페이지 이동 - by sineTlsl */
  const handlerRedirectToLogin = () => {
    navigate('/login');
  };

  return (
    <UserLoginBtnContainer>
      <button onClick={handlerRedirectToLogin}>로그인</button>
    </UserLoginBtnContainer>
  );
};

export default UserLoginBtn;

// ===================== 로그인 폼 =====================
const UserLoginBtnContainer = styled.div`
  width: 70px;
  height: 30px;

  > button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 10px;
    border: none;
    background: var(--black-light);
    color: var(--white-hunt);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 60px;
    height: 27px;

    > button {
      font-size: 15px;
    }
  }
`;
