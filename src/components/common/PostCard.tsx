import styled from "styled-components";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";

//Type
import { vblogListType } from "types/main/list";

//Component
import Hashtag from "./Hashtag";

interface PostCardProps {
  data: vblogListType;
}

//**2023/07/19 PostCard
const PostCard: React.FC<PostCardProps> = ({ data }) => {
  // Rest of the component code

    return (
        <CardContainer>
          <IconContainer>
              <AiFillHeart width="10px" height= "10px" color="var(--icon-red)"/>
              <div className="Label"> {data.heart} </div>
              <AiFillEdit width="10px" height= "10px" color="var(--icon-navy)"/>
              <div className="Label"> {data.review} </div>
              <div className="UserName"> {data.userName} </div>
          </IconContainer>
          <ImgContainer imgurl={data.imgurl}>
          </ImgContainer>
          <ContentContainer>
            <TitleContainer>
            <div className="Title"> {data.contentTitle} </div>
            <div className="ContentDate"> {data.contentDate} </div>
            </TitleContainer>
            <div className="Content"> {data.content} </div>
          </ContentContainer>
          <TagContainer>
          {data.hashtags.slice(0, 6).map(( hashtag ) => (
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
  height: 350px;
  perspective: 1000px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  cursor: pointer;
  
  /* 확대효과 */
  &:hover {
    transform: scale(1.02); /* 마우스 오버 시 10% 확대 */
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 250px;
    height: 300px;
    }
`;

//IconContainer :  카드안에 들어갈 icon
const IconContainer = styled.div`
    ${({ theme }) => theme.common.flexRow};
    padding: 7px;
    width: 100%;
    height: 7%;

    > .Label {
      color: var(--black-hunt);
      padding: 5px;
      font-size: 15px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 13px;
      }
    }

    > .UserName {
        display: flex;
        justify-content : flex-end;
        color: var(--black-hunt);
        font-size: 15px;
        margin-left: auto;
        white-space: nowrap;
        max-width: calc(100% - 150px);  
        overflow: hidden; 
        text-overflow: ellipsis;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 13px;
      }
    }
`;

//ImgContainer :  카드 안에 들어갈 이미지
const ImgContainer = styled.div<{ imgurl: string }>`
    width: 100%;
    height: 38%;
    background-image: ${({ imgurl }) => `url(${imgurl})`};
      background-size: cover;
  background-position: center;

    > img {
      width: 100%;
      height: 100%;
    }
`;

//contentContainer :  카드 안에 들어갈 본문 내용
const ContentContainer = styled.div`
    width: 100%;
    height: 35%;

    > .Content {
      ${({ theme }) => theme.common.flexRow};
      padding: 7px;
      color: var(--black-hunt);
      font-weight: 400;
      font-size: 14px;
      overflow: hidden;           // Hide overflowing content
      text-overflow: ellipsis;    // Display ellipsis (...) for overflowed text

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 14px;
      }
    }
`;

//TitleContainer :  카드 안에 들어갈 제목과 작성날짜
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
 
    >.Title {
    padding: 10px 7px 7px 7px;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 20px;
    white-space: nowrap;  
    overflow: hidden;    
    text-overflow: ellipsis;    // ...으로 바꿔주는 css
    max-width: calc(100% - 100px); 

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 17px;
      }
    }

    >.ContentDate {
        display: flex;
        justify-content : flex-end;
        padding: 14px 7px 7px 7px;
        color: var(--black-hunt);
        font-weight: 200;
        font-size: 15px;
        margin-left: auto;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 14px;
      }

    }

`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 7px;
    flex-wrap : wrap;
    width: 100%;
    height: 20%;
`;
