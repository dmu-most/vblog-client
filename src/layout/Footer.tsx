import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Footer
const Footer: React.FC = () => {
  return (
    <footer>
      <FooterContainer>
        <TextContainer>
          <TextArea1>
            <FooterText>동양미래대학교 컴퓨터소프트웨어공학과</FooterText>
            <TeamName>MOST</TeamName>
            <FooterText>김정환 김주영 김지현 임시은</FooterText>
            <ImgArea>
              <CircleContainer>
                <Img1 src={'/assets/images/jeonghwan.png'} />
              </CircleContainer>
              <CircleContainer>
                <Img2 src={'/assets/images/juyoong.png'} />
              </CircleContainer>
              <CircleContainer>
                <Img3 src={'/assets/images/jihyun.png'} />
              </CircleContainer>
              <CircleContainer>
                <Img1 src={'/assets/images/sieun.png'} />
              </CircleContainer>
            </ImgArea>
          </TextArea1>
          <TextArea2>
            <UrlZone>
              <Link to="https://github.com/dmu-most" target="_blank">
                <UrlArea>
                  <Img src={'/assets/images/github.png'} />
                  <FooterText>Github</FooterText>
                </UrlArea>
              </Link>
              <Link to="https://glowing-square-e84.notion.site/MOST-a193863e0d48447eb852ca003fc71d46" target="_blank">
                <UrlArea>
                  <Img src={'/assets/images/notion.png'} />
                  <FooterText>Notion</FooterText>
                </UrlArea>
              </Link>
              <UrlArea>
                <FooterText>© [vblog] [2023.07.04]</FooterText>
              </UrlArea>
            </UrlZone>
          </TextArea2>
        </TextContainer>
      </FooterContainer>
    </footer>
  );
};

export default Footer;

//Footer 컨테이너
const FooterContainer = styled.footer`
  background-color: var(--white-deepdark);
  width: 100%;
  height: 180px;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    display: none;
  }
`;

const TextContainer = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMaxL}; // 1350px
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;

  // 디바이스 크기가 1580px 클 경우 1500px
  @media ${props => props.theme.breakpoints.desktopLMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxXL};
  }

  // 디바이스 크기가 1439px 보다 작을 경우 1250px
  @media ${props => props.theme.breakpoints.desktopMMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxM};
    padding: 0 2rem;
  }

  // 디바이스 크기가 1250px 보다 작을 경우 1150px
  @media ${props => props.theme.breakpoints.desktopSMax} {
    max-width: ${({ theme }) => theme.widthSize.contentMaxS};
  }
`;

const TextArea1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90px;
`;

const TextArea2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  padding-top: 20px;
`;

const FooterText = styled.p`
  color: var(--gray-dark);
  font-size: 15px;
`;

const TeamName = styled.p`
  color: var(--gray-dark);
  font-size: 15px;
  padding: 20px 0 10px;
`;

const ImgArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const UrlZone = styled.div`
  display: flex;
  flex-direction: column;
`;

const UrlArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin: 5px;
`;

const CircleContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
// 이미지 크기 조정으로 인한 불필요한 코드 문제로 고칠 수 있는지 확인해보기
const Img1 = styled.img`
  width: 90%;
  height: 90%;
`;

const Img2 = styled.img`
  width: 80%;
  height: 80%;
`;

const Img3 = styled.img`
  width: 100%;
  height: 100%;
`;
