import styled from 'styled-components';

interface SocialIconsProps {
  socialType: string | null;
}

const myInfoSocial = [
  { socialType: 'KAKAO', imgSrc: 'kakao_logo' },
  { socialType: 'NAVER', imgSrc: 'naver_logo' },
  { socialType: 'GOOGLE', imgSrc: 'google_logo' },
];

/** 2023/09/28 - 소셜 아이콘 컴포넌트 - by sineTlsl */
const SocialIcons: React.FC<SocialIconsProps> = ({ socialType }): JSX.Element => {
  return (
    <SocialIconsContainer>
      {socialType ? (
        <>
          {myInfoSocial.map(item =>
            socialType === item.socialType ? (
              <img src={`/assets/images/${item.imgSrc}.png`} key={item.socialType} />
            ) : null,
          )}
        </>
      ) : (
        <p className="local_text">local</p>
      )}
    </SocialIconsContainer>
  );
};

export default SocialIcons;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > img {
    object-fit: cover;
    width: 20px;
    height: 20px;
  }
  > .local_text {
    font-size: 16px;
    color: var(--gray-dark);
  }
`;
