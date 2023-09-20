import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom';

//Type
import { BannerType } from "types/main/list";

// component
import BannerTag from "@components/common/BannerTag";

interface BannerProps {
  data: BannerType;
}

//**2023/07/07 BannerComponent - by jh
const BannerComponent: React.FC<BannerProps> = ({ data }) => {
  const navigate = useNavigate();

  /** 2023/07/29 - 해당 card 클릭 시 해당 board/id로 넘어갈 수 있게하는 함수 - by jh*/
  const handlePostClick = () => {
    navigate(`/board/${data.contentId}`);
  };

  return (
    <BannerContainer>
      <RowBannerContainer>
        <BestBannerContainer onClick={handlePostClick}>
          <div className="Label"> 브블 1위🥇 컨텐츠 </div>
          <img src={data.imgUrl} alt="banner Image" />
        </BestBannerContainer>
        <PromoBannerContainer>
          <TagBannerForm>
            <div className="Label"> 현재 가장 인기 tag모음 </div>
            <div className="tags">
              <BannerTag />
            </div>
          </TagBannerForm>
          <CallBannerForm>
            <div className="Label"> 브블이 뭔가요? 🙋‍♀️ </div>
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
    display: flex;
    width: auto;
    height: 350px;
    margin: 3rem 2rem;
    @media ${props => props.theme.breakpoints.mobileSMax} {
      margin: 40px 20px 20px 20px;
      height: 250px;
      }

    @media ${props => props.theme.breakpoints.mobileLMax} {
      margin: 40px 20px 20px 20px;
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
    /* height: 97%; */
    margin: 0.5rem;
    background-color: var(--white-primary);
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
  width: 100%;
  /* height: 90%; */
  margin: 0.5rem;
  background-color: var(--white-primary);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.3s ease;
  /* margin-bottom: 1rem; */

  &:hover {
    transform: scale(1.02); /* 5% scale increase on mouse hover */
  }

  > .Label {
    color: var(--black-hunt);
    padding: 20px;
    font-weight: 500;
    font-size: 20px;
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
  width: 100%;
  /* height: 90%; */
  margin: 0.5rem;
  background-color: var(--white-primary);
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
    font-size: 20px;
    }
`;

const ImgContainer = styled.div`
    ${({ theme }) => theme.common.flexCenter};

    > img {
    max-width: 240px;
    max-height: 160px;
    object-fit: fill;
  }
`;