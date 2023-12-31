import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { postLogin } from '@api/auth/login';

// types
import { LoginFormType } from 'types/auth';

// component
import AlertModal from '@components/common/AlertModal';

// store
import { useTokenStore } from '@store/useTokenStore';
import { useMemberStore } from '@store/useMemberStore';
import { useRememberIdStore } from '@store/useRememberIdStore';

// util
import { isValidId, isValidPassword } from '@utils/formValidation';

// icons
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface ErrorResponse {
  message: string;
}

/** 2023/07/25 - 로그인 폼 컴포넌트 - by sineTlsl */
const LoginForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isRemberId, setIsRememberId] = useState<boolean>(false);
  const { setAccessToken, setRefreshToken } = useTokenStore();
  const { setMember } = useMemberStore();
  const { rememberedId, setRememberedId, clearRememberedId } = useRememberIdStore();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalErrorText, setModalErrorText] = useState<string[]>([]);

  const [form, setForm] = useState<LoginFormType>({
    loginId: '',
    password: '',
  });

  useEffect(() => {
    if (rememberedId) {
      setForm(prevForm => ({ ...prevForm, loginId: rememberedId }));
      setIsRememberId(true);
    }
  }, [rememberedId]);

  /** 2023/09/09 - 로그인 버튼 함수 - by sineTlsl */
  const handlerLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidId(form.loginId) || !isValidPassword(form.password)) {
      setModalErrorText(['아이디 또는 비밀번호를 다시 확인해주세요.']);
      setIsModalOpen(true);

      return;
    }

    try {
      const res = await postLogin(form);

      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);

      console.log(res);
      setMember({
        imageUrl: res.imageUrl,
        username: res.username,
      });

      if (isRemberId) {
        setRememberedId(form.loginId);
      } else {
        clearRememberedId();
      }

      if (!res.isSelected) {
        navigate('/myinfo', { state: { isCategory: true } });
      } else {
        navigate('/');
      }
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      // 아이디와 비밀번호가 일치하지 않을 때, 모달창 추가
      if (axiosError.response) {
        console.log('로그인 실패');

        const { data } = axiosError.response;

        setModalErrorText(data.message.split('. '));
        setIsModalOpen(true);
      }
    }
  };

  /** 2023/07/25 - 회원가입 페이지 이동 - by sineTlsl */
  const redirectToSignUp = () => {
    navigate('/signup');
  };

  return (
    <LoginFormContainer>
      <FormWrap onSubmit={handlerLoginFormSubmit}>
        <input
          className="form_id"
          type="text"
          placeholder="아이디"
          name="loginId"
          value={form.loginId}
          onChange={e => setForm(prevForm => ({ ...prevForm, loginId: e.target.value }))}
        />
        <input
          className="form_password"
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          value={form.password}
          onChange={e => setForm(prevForm => ({ ...prevForm, password: e.target.value }))}
        />
        <LoginMore>
          <button type="button" className="id_remember" onClick={() => setIsRememberId(!isRemberId)}>
            <AiOutlineCheckCircle size="25" color={!isRemberId ? 'var(--gray-primary)' : 'var(--gray-dark)'} />
            아이디 저장
          </button>
        </LoginMore>
        <ButtonWrap>
          <button type="submit" className="common_btn login_btn">
            로그인
          </button>
          <button type="button" className="common_btn signup_btn" onClick={redirectToSignUp}>
            회원가입
          </button>
        </ButtonWrap>
        <div>
          <AlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {modalErrorText.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </AlertModal>
        </div>
      </FormWrap>
    </LoginFormContainer>
  );
};

export default LoginForm;

const LoginFormContainer = styled.div`
  margin-top: 3rem;
  max-width: 450px;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobileLMax} {
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

  @media ${props => props.theme.breakpoints.mobileLMax} {
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

  > .id_remember {
    ${({ theme }) => theme.common.flexCenter};
    gap: 0.3rem;
    color: var(--black-hunt);
    font-size: 15px;
  }
  > .find_password {
    color: var(--black-hunt);
    font-size: 15px;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    > .id_remember,
    > .find_password {
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
  > .login_btn {
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

  @media ${props => props.theme.breakpoints.mobileLMax} {
    > .common_btn {
      font-size: 15px;
    }
  }
`;
