import { useState } from 'react';
import styled from 'styled-components';
import { SignUpFormType } from 'types/sign';

// util
import { isValidId, isValidName, isValidEmail, isValidPassword } from '@utils/formValidation';

// icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

/** 2023/07/25 - 회원가입 폼 컴포넌트 - by sineTlsl */
const SignUpForm: React.FC = (): JSX.Element => {
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

  const [form, setForm] = useState<SignUpFormType>({
    id: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const [validationMessage, setValidationMessage] = useState({
    id: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  /** 2023/08/15 - 아이디 입력 이벤트 함수 - by sineTlsl */
  const handleOnChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({ ...form, id: value });

    if (isValidId(value)) {
      setValidationMessage({ ...validationMessage, id: '사용할 수 있는 아이디입니다.' });
    } else {
      setValidationMessage({ ...validationMessage, id: '4~12자 사이의 알파벳 대소문자와 숫자로만 입력해주세요.' });
    }
  };

  /** 2023/08/15 - 이메일 입력 이벤트 함수 - by sineTlsl */
  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({ ...form, email: value });

    if (isValidEmail(value)) {
      setValidationMessage({ ...validationMessage, email: '올바른 이메일 형식입니다.' });
    } else {
      setValidationMessage({ ...validationMessage, email: '올바르지 않는 이메일 형식입니다. 다시 한번 확인해주세요.' });
    }
  };

  /** 2023/08/15 - 닉네임 입력 이벤트 함수 - by sineTlsl */
  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({ ...form, name: value });

    if (isValidName(value)) {
      setValidationMessage({ ...validationMessage, name: '올바른 형식의 별명입니다.' });
    } else {
      setValidationMessage({
        ...validationMessage,
        name: '2~8자 사이의 한글과 알파벳 대소문자, 숫자로만 입력해주세요.',
      });
    }
  };

  /** 2023/08/15 - 비밀번호 입력 이벤트 함수 - by sineTlsl */
  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({ ...form, password: value });

    if (isValidPassword(value)) {
      setValidationMessage({ ...validationMessage, password: '올바른 비밀번호 형식입니다.' });
    } else {
      setValidationMessage({
        ...validationMessage,
        password: '8~16자 사이의 최소한 한 개의 알파벳 대소문자, 특수기호, 숫자가 포함되어야 합니다.',
      });
    }
  };

  /** 2023/08/15 - 비밀번호 재확인 입력 이벤트 함수 - by sineTlsl */
  const handleOnChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({ ...form, passwordConfirm: value });

    if (value === form.password) {
      setValidationMessage({ ...validationMessage, passwordConfirm: '비밀번호가 일치합니다.' });
    } else {
      setValidationMessage({
        ...validationMessage,
        passwordConfirm: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
      });
    }
  };

  /** 2023/07/25 - submit 이벤트 발생을 막는 함수 - by sineTlsl */
  const handlePreventFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  /** 2023/07/25 - 비밀번호 보기/숨기기 함수 - by sineTlsl */
  const handlePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  /** 2023/07/25 - 비밀번호 확인 보기/숨기기 함수 - by sineTlsl */
  const handelConfirmPasswordVisibility = (e: React.MouseEvent) => {
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
            <input
              type="text"
              id="user_id"
              className="id"
              value={form.id}
              placeholder="아이디 입력(4~12자)"
              onChange={handleOnChangeId}
            />
            <button className="id_btn" onClick={handlePreventFormSubmit}>
              중복 확인
            </button>
          </div>
          <ValidationMessage isValid={isValidId(form.id)}>{validationMessage.id}</ValidationMessage>
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_email">
            이메일
          </label>
          <input
            type="email"
            id="user_email"
            className="email"
            value={form.email}
            placeholder="이메일@example.com"
            onChange={handleOnChangeEmail}
          />
          <ValidationMessage isValid={isValidEmail(form.email)}>{validationMessage.email}</ValidationMessage>
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_name">
            별명
          </label>
          <input
            type="text"
            id="user_name"
            className="name"
            value={form.name}
            placeholder="별명 입력(2~8자)"
            onChange={handleOnChangeName}
          />
          <ValidationMessage isValid={isValidName(form.name)}>{validationMessage.name}</ValidationMessage>
        </div>
        <div className="form_item">
          <label className="input_title" htmlFor="user_password">
            비밀번호
          </label>
          <div className="password_icon_wrap">
            <input
              type={isPassword ? 'text' : 'password'}
              id="user_password"
              value={form.password}
              className="password"
              placeholder="비밀번호 입력(알파벳 대소문자, 숫자, 특수문자 포함 8~16자)"
              onChange={handleOnChangePassword}
            />
            <button onClick={handlePasswordVisibility}>
              <p className="password_icon">
                {!isPassword ? (
                  <AiFillEyeInvisible size="25px" color="var(--gray-dark)" />
                ) : (
                  <AiFillEye size="25px" color="var(--black-primary)" />
                )}
              </p>
            </button>
          </div>
          <ValidationMessage isValid={isValidPassword(form.password)}>{validationMessage.password}</ValidationMessage>
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
              value={form.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={handleOnChangePasswordConfirm}
            />
            <button onClick={handelConfirmPasswordVisibility}>
              <p className="password_icon">
                {!isConfirmPassword ? (
                  <AiFillEyeInvisible size="25px" color="var(--gray-dark)" />
                ) : (
                  <AiFillEye size="25px" color="var(--black-primary)" />
                )}
              </p>
            </button>
          </div>
          <ValidationMessage isValid={form.password === form.passwordConfirm}>
            {validationMessage.passwordConfirm}
          </ValidationMessage>
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
  gap: 1.6rem;

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

// ===================== 유효성 검사 텍스트 메시지 =====================
const ValidationMessage = styled.div<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? 'var(--adobe-color2)' : '#D7202E')};
  font-size: 15px;
  line-height: 18 px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 14px;
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
