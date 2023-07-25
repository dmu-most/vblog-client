import styled from 'styled-components';
import { useState } from 'react';

// icons
import { AiOutlineCheckSquare } from 'react-icons/ai';

/** 2023/07/25 - 로그인 폼 컴포넌트 - by sineTlsl */
const SignInForm: React.FC = (): JSX.Element => {
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

  return (
    <SignInFormContainer>
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
        <button className="common_btn signup_btn" onClick={handlerPreventFormSubmit}>
          회원가입
        </button>
      </ButtonWrap>
    </SignInFormContainer>
  );
};

export default SignInForm;

// ===================== 폼 컨테이너 =====================
const SignInFormContainer = styled.form`
  margin-top: 3rem;
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
    width: 450px;
    height: 50px;
    border-radius: 2px;
    padding-left: 0.8rem;
    border: 1px solid var(--gray-dark);
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
  }
  > .signin_btn {
    color: var(--white-primary);
    background: var(--green-hunt);
  }
  > .signup_btn {
    color: var(--green-hunt);
    background: var(--white-primary);
    border: 1px solid var(--green-hunt);
  }
`;
