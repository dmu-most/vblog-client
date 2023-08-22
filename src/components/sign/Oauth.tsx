import styled from 'styled-components';

/** 2023/07/25 - 소셜 로그인 컴포넌트 - by sineTlsl */
const Oauth: React.FC = (): JSX.Element => {
  /** 2023/08/20 - OAuth 요청 함수 - by sineTlsl */
  // 네이버
  const handlerNaverClick = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/naver`;
  };
  // 카카오
  const handlerKakaoClick = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`;
  };
  // 구글
  const handlerGoogleClick = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`;
  };

  return (
    <OauthContainer>
      <OauthTitle>
        <div className="dashed_border" />
        <p>SNS 계정으로 간편하게 로그인하세요.</p>
        <div className="dashed_border" />
      </OauthTitle>
      <OauthSignUpWrap>
        <OauthButton onClick={handlerNaverClick}>
          <img src="/assets/images/naver_logo.png" />
          <p className="oauth_item_title">네이버로 로그인</p>
        </OauthButton>
        <div className="gap_item" />
        <OauthButton onClick={handlerKakaoClick}>
          <img src="/assets/images/kakao_logo.png" />
          <p className="oauth_item_title">카카오로 로그인</p>
        </OauthButton>
        <div className="gap_item" />
        <OauthButton onClick={handlerGoogleClick}>
          <img src="/assets/images/google_logo.png" />
          <p className="oauth_item_title">구글로 로그인</p>
        </OauthButton>
      </OauthSignUpWrap>
    </OauthContainer>
  );
};

export default Oauth;

const OauthContainer = styled.div`
  margin-top: 2.8rem;
  ${({ theme }) => theme.common.flexCenterCol};
  max-width: 450px;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 2rem;
  }
`;

// ===================== 소셜 로그인 시작을 알리는 제목 =====================
const OauthTitle = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};

  > .dashed_border {
    flex-grow: 1;
    border-top: 1px solid var(--gray-primary);
    height: 1px;
  }
  > p {
    color: var(--black-light);
    margin: 0 1rem;
    font-size: 15px;
  }
`;

// ===================== OAuth 박스  =====================
const OauthSignUpWrap = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  gap: 2rem;
`;

// ===================== OAuth 버튼  =====================
const OauthButton = styled.button`
  ${({ theme }) => theme.common.flexCenterCol};
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  > img {
    height: 60px;
    width: 60px;
  }
  > .gap_item {
    height: 100%;
    width: 1px;
    border-right: 1px dashed var(--gray-primary);
  }
  > .oauth_item_title {
    padding-top: 1rem;
    font-size: 14px;
    font-weight: 600;
    color: var(--black-light);
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    gap: 1rem;

    > img {
      height: 45px;
      width: 45px;
    }
    > .oauth_item_title {
      font-size: 13px;
    }
  }
`;
