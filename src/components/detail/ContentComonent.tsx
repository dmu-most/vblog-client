import { styled } from "styled-components";
// Type
import { vblogType } from "types/detail/vblog";

// Component
import Hashtag from "@components/common/Hashtag";

// icon
import { BsBoxArrowUpRight } from 'react-icons/bs';


interface DetailProps {
  data: vblogType;
}

//**2023/07/29 CommandComponent- by jh
const ContentComponent: React.FC<DetailProps> = ({ data }) => {

  /** 2023/09/06 - 해당 URL 클릭 시 새 브라우저로 넘어가게 하는 함수 - by jh */
  const handleIconClick = () => {
    window.open(data.link, "_blank");
  };
  

  return (
    <ContentContainer>
      <ProfileContainer>
        <img src={data.imgurl} alt="Profile Image" />
        <TitleContainer>
          <div className="content"> {data.content} </div>
          <div className="title"> {data.contentTitle} </div>
        </TitleContainer>
      </ProfileContainer>
      <TagContainer>
        {data.hashtags && data.hashtags.map((hashtag) => (
          <Hashtag key={hashtag} hashtag={hashtag} />
        ))}
      </TagContainer>
      <Line />
      <GradeContainer>
        <Grade>
          <div className="value"> {data.rank} </div>
          <div className="key"> 브블 순위 </div>
        </Grade>
        <Grade>
          <div className="value"> {data.grade} </div>
          <div className="key"> 브블 평점 </div>
        </Grade>
        <Grade>
          <div className="value"> {data.heart}/{data.hate} </div>
          <div className="key"> 브블 좋아요/싫어요 </div>
        </Grade>
      </GradeContainer>
      <ThumbnailContainer imgurl={data.imgurl}>
        <BsBoxArrowUpRight className="icon" onClick={handleIconClick} />
      </ThumbnailContainer>
    </ContentContainer>
  );
};

export default ContentComponent;


const ContentContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 100px 20px 20px 20px;
  border-radius: 10px;
  background-color: var(--white-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
      }
    @media ${props => props.theme.breakpoints.mobileLMax} {
    width: 90%;
      }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 30px;

  > img {
    width: 50px;
    height: 50px;
    margin: 20px;
    object-fit: cover;
    border-radius: 50%;

    @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 30px;
    height: 30px;
      }
    }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 13px;

  >.content {
    padding: 7px;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 20px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 15px;
    }
  }

  >.title {
    padding: 7px;
    color: var(--black-hunt);
    font-size: 15px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 13px;
    }
  }
`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 15px;
    flex-wrap : wrap;
`;

const Line = styled.hr`
  color: var(--gray-light);
  width: 90%;
  border-top: 1px solid;
`;

const GradeContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterRow};
    width: 100%;
    height: auto;
    padding: 30px;
    gap: 200px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
          gap: 50px;
    }

    @media ${props => props.theme.breakpoints.mobileLMax} {
          gap: 50px;
    }
`;

const Grade = styled.div`
    ${({ theme }) => theme.common.flexCenterCol};

    > .key {
    color: var(--gray-dark);
    font-size: 15px;
    padding: 15px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 5px;
     }
    }

    > .value {
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 30px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 17px;
     }
    }  
`;

const ThumbnailContainer = styled.div<{ imgurl: string }>`
    width: 100%;
    height: 600px;
    background-image: ${({ imgurl }) => `url(${imgurl})`};
    background-size: cover; // This will ensure the background image covers the entire container
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    overflow: hidden;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      height: 300px;
     }

    @media ${props => props.theme.breakpoints.mobileLMax} {
      height: 400px;
    }

    > img {
      width: 100%;
      height: 100%;
      filter: blur(7px);
      object-fit: fill;
    }

    > .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    color: var(--white-primary);
    }
`;



