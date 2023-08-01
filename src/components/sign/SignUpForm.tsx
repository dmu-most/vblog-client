import { useState } from 'react';
import styled from 'styled-components';

// icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

/** 2023/07/25 - 회원가입 폼 컴포넌트 - by sineTlsl */
const SignUpForm: React.FC = (): JSX.Element => {
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

  /** 2023/07/25 - submit 이벤트 발생을 막는 함수 - by sineTlsl */
  const handlerPreventFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  /** 2023/07/25 - 비밀번호 보기/숨기기 함수 - by sineTlsl */
  const hanlderPasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  /** 2023/07/25 - 비밀번호 확인 보기/숨기기 함수 - by sineTlsl */
  const handerConfirmPasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConfirmPassword(!isConfirmPassword);
  };

  return (
    <SignUpFormContainer>
      <FormWrap>
        <div className="form_item">
          <label className="input_title" htmlFor="user_id">
            아이디
          </label>
          <div className="id_input_wrap">
            <input type="text" id="user_id" className="id" placeholder="아이디를 입력하세요" />
            <button className="id_btn" onClick={handlerPreventFormSubmit}>
              중복 확인
            </button>
          </div>
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_email">
            이메일
          </label>
          <input type="text" id="user_email" className="email" placeholder="이메일@example.com" />
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_name">
            별명
          </label>
          <input type="text" id="user_name" className="name" placeholder="별명을 입력하세요" />
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_password">
            비밀번호
          </label>
          <div className="password_icon_wrap">
            <input
              type={isPassword ? 'text' : 'password'}
              id="user_password"
              className="password"
              placeholder="비밀번호를 입력하세요"
            />
            <button onClick={hanlderPasswordVisibility}>
              <p className="password_icon">
                {!isPassword ? (
                  <AiFillEyeInvisible size="25px" color="var(--gray-dark)" />
                ) : (
                  <AiFillEye size="25px" color="var(--black-primary)" />
                )}
              </p>
            </button>
          </div>
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_password_confirm">
            비밀번호 재확인
          </label>
          <div className="password_icon_wrap">
            <input
              type={isConfirmPassword ? 'text' : 'password'}
              id="user_password_confirm"
              className="password"
              placeholder="비밀번호를 한번 더 입력하세요"
            />
            <button onClick={handerConfirmPasswordVisibility}>
              <p className="password_icon">
                {!isConfirmPassword ? (
                  <AiFillEyeInvisible size="25px" color="var(--gray-dark)" />
                ) : (
                  <AiFillEye size="25px" color="var(--black-primary)" />
                )}
              </p>
            </button>
          </div>
        </div>
        <ButtonWrap>
          <button type="submit" className="signup_btn">
            회원가입
          </button>
        </ButtonWrap>
      </FormWrap>
    </SignUpFormContainer>
  );
};

export default SignUpForm;

const SignUpFormContainer = styled.div`
  margin-top: 3rem;
  max-width: 450px;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 2rem;
    margin: 0.2rem;
  }
`;

// ===================== 회원가입 폼 =====================
const FormWrap = styled.form`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 2rem;

  > .form_item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.6rem;
    width: 100%;
  }

  > .form_item > .input_title {
    color: var(--black-hunt);
    font-size: 16px;
    font-weight: 600;
  }
  > .form_item > .id_input_wrap {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    gap: 0.5rem;
  }
  > .form_item > .id_input_wrap > .id,
  > .form_item > .email,
  > .form_item > .name,
  > .form_item > .password_icon_wrap > .password {
    height: 47px;
    width: 100%;
    border-radius: 2px;
    padding-left: 0.8rem;
    border: 1px solid var(--gray-dark);
  }

  > .form_item > .password_icon_wrap {
    position: relative;
  }
  > .form_item > .password_icon_wrap > button {
    position: absolute;
    border: none;
    background: none;
    top: 12px;
    right: 10px;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  > .form_item > .id_input_wrap > .id_btn {
    max-width: 100px;
    width: 100%;
    height: 47px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    color: var(--white-primary);
    background: var(--green-hunt);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .form_item > .id_input_wrap > .id_btn {
      font-size: 15px;
      max-width: 80px;
    }
  }
`;

// ===================== 회원가입 버튼 =====================
const ButtonWrap = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 0.5rem;

  > .signup_btn {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: var(--white-primary);
    background: var(--green-hunt);

    &:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    &:active {
      background: var(--deep-green);
    }
  }
  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .signup_btn {
      font-size: 15px;
    }
  }
`;
