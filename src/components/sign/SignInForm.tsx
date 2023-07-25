import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { AiOutlineCheckSquare } from 'react-icons/ai';

/** 2023/07/25 - 로그인 폼 컴포넌트 - by sineTlsl */
const SignInForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [rememberId, setRememberId] = useState<boolean>(false);

  /** 2023/07/25 - submit 이벤트 발생을 막는 함수 - by sineTlsl */
  const handlerPreventFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  /** 2023/07/25 - 아이디 저장 함수 - by sineTlsl */
  const handlerIdRemember = (e: React.MouseEvent) => {
    e.preventDefault();
    setRememberId(!rememberId);
  };

  /** 2023/07/25 - 회원가입 페이지 이동 - by sineTlsl */
  const redirectToSignUp = () => {
    navigate('/signup');
  };

  return (
    <SignInFormContainer>
      <FormWrap method="post">
        <input className="form_id" type="text" placeholder="아이디" />
        <input className="form_password" type="password" placeholder="비밀번호" autoComplete="off" />
        <LoginMore>
          <button className="id_remember" onClick={handlerIdRemember}>
            <AiOutlineCheckSquare size="25" color={!rememberId ? 'var(--gray-primary)' : 'var(--gray-dark)'} />
            아이디 저장
          </button>
          <div className="search_user_info">
            <button onClick={handlerPreventFormSubmit}>아이디 찾기</button>
            <p className="gap">|</p>
            <button onClick={handlerPreventFormSubmit}>비밀번호 찾기</button>
          </div>
        </LoginMore>
        <ButtonWrap>
          <button type="submit" className="common_btn signin_btn">
            로그인
          </button>
          <button className="common_btn signup_btn" onClick={redirectToSignUp}>
            회원가입
          </button>
        </ButtonWrap>
      </FormWrap>
    </SignInFormContainer>
  );
};

export default SignInForm;

const SignInFormContainer = styled.div`
  margin-top: 3rem;
  max-width: 450px;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 2rem;
    margin: 0.2rem;
  }
`;

// ===================== 로그인 폼 =====================
const FormWrap = styled.form`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  // form 아이디 및 비밀번호 입력 input 창
  > .form_id,
  .form_password {
    width: 100%;
    height: 50px;
    border-radius: 2px;
    padding-left: 0.8rem;
    border: 1px solid var(--gray-dark);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .form_id,
    .form_password {
      font-size: 15px;
      height: 47px;
    }
  }
`;

// ===================== 아이디 저장, 아이디 및 비밀번호 찾기 =====================
const LoginMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .id_remember,
  > .search_user_info {
    ${({ theme }) => theme.common.flexCenter};
    gap: 0.3rem;
    color: var(--black-hunt);
    font-size: 15px;
  }
  > .search_user_info > button {
    color: var(--black-hunt);
    font-size: 15px;
  }
  > .search_user_info > .gap {
    display: inline-block;
    font-size: 0;
    width: 1px;
    height: 10px;
    background: var(--gray-primary);
    margin: 4px 5px 4px 5px;
    vertical-align: top;
    box-sizing: border-box;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .id_remember,
    > .search_user_info > button {
      font-size: 14px;
    }
  }
`;

// ===================== 로그인 및 회원가입 버튼 =====================
const ButtonWrap = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 0.6rem;

  // 공통적인 속성
  > .common_btn {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  > .signin_btn {
    color: var(--white-primary);
    background: var(--green-hunt);

    &:active {
      background: var(--deep-green);
    }
  }
  > .signup_btn {
    color: var(--green-hunt);
    background: var(--white-primary);
    border: 1px solid var(--green-hunt);

    &:active {
      background: var(--white-dark);
      color: var(--deep-green);
    }
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .common_btn {
      font-size: 15px;
    }
  }
`;
