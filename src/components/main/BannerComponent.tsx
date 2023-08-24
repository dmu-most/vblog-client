import { styled } from "styled-components";

// component
import Hashtag from "@components/common/Hashtag";

//**2023/07/07 BannerComponent - by jh
const BannerComponent = () => {
  return (
    <BannerContainer>
      <RowBannerContainer>
        <BestBannerContainer>
          <div className="Label"> 브블 1위🥇 컨텐츠 </div>
          <img src="/assets/images/youtubeimg.png" />
        </BestBannerContainer>
        <PromoBannerContainer>
          <TagBannerForm>
            <div className="Label"> 현재 가장 인기 tag모음 </div>
            <div className="tags">
              {/* <Hashtag /> <Hashtag /> <Hashtag /> <Hashtag /> <Hashtag /> <Hashtag /> */}
            </div>
          </TagBannerForm>
          <CallBannerForm>
            <div className="Label"> 브블과 소통해요 🙋‍♀️ </div>
            <ImgContainer>
            <img src="/assets/images/community.png" />
            </ImgContainer>
          </CallBannerForm>
        </PromoBannerContainer>
      </RowBannerContainer>
    </BannerContainer>
  );
};

export default BannerComponent;

const BannerContainer = styled.div`
    width: auto;
    height: 450px;
    margin-top: 6rem;
    margin-bottom: 100px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      margin: 50px 20px 20px 20px;
      height: 250px;
      }

    @media ${props => props.theme.breakpoints.mobileLMax} {
      margin: 50px 20px 20px 20px;
      }
`;

const RowBannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const BestBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    cursor: pointer;
    perspective: 1000px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02); /* 5% scale increase on mouse hover */
    }

  > .Label {
    color: var(--black-hunt);
    padding: 20px;
    font-weight: 500;
    font-size: 30px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 13px;
      }

    }
  
  > img {
    width: 100%;
    height: 100%;
    overflow: hidden; 
    border-radius: 0 0 10px 10px; 

    @media ${props => props.theme.breakpoints.mobileSMax} {
      /* padding: 20px;
      font-size: 15px; */
      }
  }
`;

const PromoBannerContainer = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    display: flex;
    flex-direction: column;
    flex: 1;

        // 태블릿 사이즈 부터는 bannercomponent는 숨김
    @media ${props => props.theme.breakpoints.tabletMax} {
    display: none;
  }
`;

const TagBannerForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 95%;
  height: 95%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02); /* 5% scale increase on mouse hover */
  }

  > .Label {
    color: var(--black-hunt);
    padding: 20px;
    font-weight: 500;
    font-size: 25px;
    }
  > .tags {
    display: flex;
    flex-direction: row;
    flex-wrap : wrap;
    width: 100%;
    padding: 10px;
  }
`;

const CallBannerForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 95%;
  height: 95%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02); /* 5% scale increase on mouse hover */
  }

  > .Label {
    color: var(--black-hunt);
    padding: 20px;
    font-weight: 500;
    font-size: 25px;
    }
  /* > img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    overflow: contain; 
  } */
`;

const ImgContainer = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    > img {
    width: 250px;
    height: 150px;
    overflow: fill; 
  }
`;