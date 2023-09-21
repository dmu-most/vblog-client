import styled from 'styled-components';
import { AiFillHeart, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

//Type
import { vblogListType } from 'types/main/list';

//Component
import Hashtag from './Hashtag';

// util
import { truncatedText } from '@utils/truncatedText';

interface PostCardProps {
  data: vblogListType;
}

//**2023/07/19 PostCard
const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const navigate = useNavigate();

  /** 2023/07/29 - 해당 card 클릭 시 해당 board/id로 넘어갈 수 있게하는 함수 - by jh*/
  const handlePostClick = () => {
    navigate(`/board/${data.contentId}`);
  };

  return (
    <CardContainer onClick={handlePostClick}>
      <IconContainer>
        <AiFillHeart width="10px" height="10px" color="var(--icon-red)" />
        <div className="Label"> {data.heart} </div>
        <AiFillEdit width="10px" height="10px" color="var(--icon-navy)" />
        <div className="Label"> {data.review} </div>
        <div className="UserName"> {data.userName} </div>
      </IconContainer>
      <ImgContainer imgurl={data.imgurl}></ImgContainer>
      <ContentContainer>
        <TitleContainer>
          <div className="Title"> {data.contentTitle} </div>
          <div className="ContentDate"> {data.contentDate} </div>
        </TitleContainer>
        <div className="Content"> {truncatedText(data.content, 60)} </div>
      </ContentContainer>
      <TagContainer>
        {data.hashtags.slice(0, 6).map(hashtag => (
          <Hashtag key={hashtag} hashtag={hashtag} />
        ))}
      </TagContainer>
    </CardContainer>
  );
};

// eslint-disable-next-line react/prop-types
export default PostCard;

//PostCardContainer
const CardContainer = styled.div`
  background-color: var(--white-primary);
  width: 300px;
  height: 390px;
  perspective: 1000px;
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  /* 확대효과 */
  &:hover {
    transform: scale(1.02); /* 마우스 오버 시 10% 확대 */
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    border-radius: 7px;
    height: 350px;
  }
`;

//IconContainer :  카드안에 들어갈 icon
const IconContainer = styled.div`
  ${({ theme }) => theme.common.flexRow};
  padding: 10px;
  width: 100%;
  height: 7%;

  > .Label {
    color: #616161;
    padding: 5px;
    font-size: 12px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 11px;
    }
  }

  > .UserName {
    display: flex;
    justify-content: flex-end;
    color: #616161;
    font-size: 12px;
    margin-left: auto;
    white-space: nowrap;
    max-width: calc(100% - 100px);
    overflow: hidden;
    text-overflow: ellipsis;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 11px;
    }
  }
`;

//ImgContainer :  카드 안에 들어갈 이미지
const ImgContainer = styled.div<{ imgurl: string | undefined }>`
  width: 300px;
  height: 178px;
  background-image: ${({ imgurl }) => (imgurl ? `url(${imgurl})` : `url('/assets/images/noImage.png')`)};
  background-size: cover;
  background-position: center;

  > img {
    width: 100%;
    height: 100%;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 300px;
  }
`;

//contentContainer :  카드 안에 들어갈 본문 내용
const ContentContainer = styled.div`
  width: 100%;
  padding: 0.2rem 0.7rem 0.7rem 0.7rem;

  > .Content {
    ${({ theme }) => theme.common.flexRow};
    color: #656565;
    letter-spacing: 0.2px;
    line-height: 20px;
    font-weight: 400;
    font-size: 13px;
    height: 60px;
    overflow: hidden;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 10px;
    }
  }
`;

//TitleContainer :  카드 안에 들어갈 제목과 작성날짜
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  > .Title {
    padding: 7px 5px 0 0;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // ...으로 바꿔주는 css
    max-width: calc(100% - 100px);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 15px;
      line-height: 25px;
    }
  }

  > .ContentDate {
    display: flex;
    align-items: flex-end;
    padding-bottom: 7px;
    text-align: right;
    color: var(--black-hunt);
    font-weight: 200;
    font-size: 12px;
    margin-left: auto;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 11px;
    }
  }
`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.3rem 0.7rem;
  flex-wrap: wrap;
  /* gap: 5px; */
  width: 100%;
  height: 70px;
  overflow: hidden;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    height: 20px;
  }
`;
