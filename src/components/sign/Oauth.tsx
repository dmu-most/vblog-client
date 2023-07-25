import styled from 'styled-components';

/** 2023/07/25 - 소셜 로그인 컴포넌트 - by sineTlsl */
const Oauth: React.FC = (): JSX.Element => {
  return (
    <OauthContainer>
      <OauthTitle>
        <div className="dashed_border" />
        <p>SNS 계정으로 간편하게 로그인하세요.</p>
        <div className="dashed_border" />
      </OauthTitle>
      <OauthItems>
        <button className="oauth_item">
          <img src="/assets/images/naver_logo.png" />
          <p className="oauth_item_title">네이버로 로그인</p>
        </button>
        <div className="gap_item" />
        <button className="oauth_item">
          <img src="/assets/images/kakao_logo.png" />
          <p className="oauth_item_title">카카오로 로그인</p>
        </button>
        <div className="gap_item" />
        <button className="oauth_item">
          <img src="/assets/images/google_logo.png" />
          <p className="oauth_item_title">구글로 로그인</p>
        </button>
      </OauthItems>
    </OauthContainer>
  );
};

export default Oauth;

const OauthContainer = styled.div`
  margin-top: 2.8rem;
  ${({ theme }) => theme.common.flexCenterCol};
  width: 450px;
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
  }
`;

// ===================== OAuth 아이템  =====================
const OauthItems = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  gap: 2rem;

  > .oauth_item {
    ${({ theme }) => theme.common.flexCenterCol};
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  > .gap_item {
    height: 100%;
    width: 1px;
    border-right: 1px dashed var(--gray-primary);
  }
  > .oauth_item > .oauth_item_title {
    padding-top: 1rem;
    font-size: 14px;
    font-weight: 600;
    color: var(--black-light);
  }
`;
