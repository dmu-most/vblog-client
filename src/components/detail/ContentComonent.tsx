import { styled } from "styled-components";
import React, { useState } from "react";
// Type
import { vblogType } from "types/detail/vblog";

// Component
import Hashtag from "@components/common/Hashtag";
import LikeDisLikeButton from "./LikeDisLikeButton";
import ScrapModal from "./modal/ScrapModal";

// icon
import { BsBoxArrowUpRight, BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";

interface DetailProps {
  data: vblogType;
  contentId: number;
}

//**2023/07/29 CommandComponent- by jh
const ContentComponent: React.FC<DetailProps> = ({ data, contentId }) => {
  const [scrap, setScrap] = useState(false);
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** 2023/09/06 - 해당 URL 클릭 시 새 브라우저로 넘어가게 하는 함수 - by jh */
  const handleIconClick = () => {
    window.open(data.link, "_blank");
  };
  /** 2023/09/06 - 스크랩 클릭 시 icon 변경 - by jh */
  const handleScrapClick = () => {
    setIsModalOpen(true);
    setScrap(!scrap);
  };
  

  return (
    <ContentContainer>
      {/* 스크랩 부분 컨테이너 */}
      <ScrapContainer onClick={handleScrapClick}>
        <div
          className={`scrap-icon ${scrap ? 'scrap' : ''}`}
          style={{
            color: 'var(--hunt-black)',
            width: '20px',
            height: '20px',
          }}
        >
          {scrap ? <BsBookmarkCheckFill /> : <BsBookmarkPlus />}
        </div>
      </ScrapContainer>
      {/* 해당 컨텐츠의 정보를 보여주는 컨텐이너 */}
      <ProfileContainer>
        <img src={data.imgurl} alt="Profile Image" />
        <TitleContainer>
          <div className="content"> {data.content} </div>
          <div className="title"> {data.contentTitle} </div>
        </TitleContainer>
      </ProfileContainer>
      {/* 태그를 보여주고 좋아요, 싫어요를 입력하는 컨테이너 */}
      <TagContainer>
        {data.hashtags && data.hashtags.map((hashtag) => (
          <Hashtag key={hashtag} hashtag={hashtag} />
        ))}
      <LikeDislikeContainer>
        <LikeDisLikeButton contentId={contentId}/>
      </LikeDislikeContainer>
      </TagContainer>
      <Line />
      {/* 순위, 평점, 좋아요/싫어요를 보여주는 컨테이너 */}
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
      <ThumbnailContainer imgurl={data.imgurl} onClick={handleIconClick}>
        <BsBoxArrowUpRight className="icon" />
      </ThumbnailContainer>
      <ScrapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ContentContainer>
  );
};

export default ContentComponent;


const ContentContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 100px 2rem 2rem 2rem;
  border-radius: 10px;
  background-color: var(--white-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
      }
`;

const ScrapContainer = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: row-reverse;
  margin: 2rem 2rem 0 2rem;
  padding: 1rem;
  cursor: pointer;

  .scrap-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.5s; /* 변화를 부드럽게 만들기 위한 transition 설정 */
  }

  .scrap {
    transform: scale(1.2); /* 좋아요 상태일 때 크기를 키웁니다. */
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding-right: 0.5rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 2rem;

  > img {
    width: 50px;
    height: 50px;
    margin: 1.5rem;
    object-fit: fill;
    border-bottom: 10px;
    border-radius: 50%;

    @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 40px;
    height: 40px;
      }
    }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 13px;

  >.content {
    padding: 7px;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 20px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 15px;
    }
  }

  >.title {
    padding: 7px;
    color: var(--black-hunt);
    font-size: 15px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 12px;
    }
  }
`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    margin: 2rem 2rem 2rem 3.5rem;
    flex-wrap : wrap;
`;

// 좋아요 / 싫어요 버튼 컨테이너
const LikeDislikeContainer = styled.div`
  margin-left: auto;
  padding: 1rem;
`;

const Line = styled.hr`
  color: var(--gray-light);
  width: 88%;
  border-top: 1px solid;
`;

const GradeContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterRow};
    height: auto;
    margin: 2rem;
    gap: 150px;

    @media ${props => props.theme.breakpoints.mobileLMax} {
          gap: 30px;
    }
`;

const Grade = styled.div`
    ${({ theme }) => theme.common.flexCenterCol};

    > .key {
    color: var(--gray-dark);
    font-size: 11px;
    padding: 15px;

    @media ${props => props.theme.breakpoints.mobileLMax} {
      font-size: 5px;
     }
    }

    > .value {
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 30px;

    @media ${props => props.theme.breakpoints.mobileLMax} {
      font-size: 20px;
     }
    }  
`;

const ThumbnailContainer = styled.div<{ imgurl: string | undefined }>`
    width: 100%;
    height: 600px;
    background-image: ${({ imgurl }) =>
      imgurl ? `url(${imgurl})` : `url('/assets/images/noimage.png')`};
    background-size: cover; // This will ensure the background image covers the entire container
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobileLMax} {
      height: 300px;
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



