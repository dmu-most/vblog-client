import styled from "styled-components";
import Hashtag from "./Hashtag";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";

//**2023/07/19 PostCard
const PostCard = () => {
    return (
        <CardContainer>
          <IconContainer>
              <AiFillHeart width="10px" height= "10px" color="var(--icon-red)"/>
              <div className="Label"> 31 </div>
              <AiFillEdit width="10px" height= "10px" color="var(--icon-navy)"/>
              <div className="Label"> 100 </div>
              <div className="UserName"> 싱니 </div>
          </IconContainer>
          <ImgContainer>
            <img src="/assets/images/vlog_ex.png" />
          </ImgContainer>
          <ContentContainer>
            <TitleContainer>
            <div className="Title">지구오락실</div>
            <div className="ContentDate"> 2023.07.19</div>
            </TitleContainer>
            <div className="Content"> 우리 지락이들 또 랜덤 플레이 댄스 찢었다💥 케이팝 기강 잡고 영석이 형도 비명 지르게 한 지락이들 표 칼군무💃 매주 금 오후 8시 40분 tvN에서! </div>
          </ContentContainer>
          <TagContainer>
            <Hashtag />
            <Hashtag />
            <Hashtag />
            <Hashtag />
          </TagContainer>
        </CardContainer>
  );
};

export default PostCard;

//PostCardContainer
const CardContainer = styled.div`
  background-color: white;
  width: 300px;
  height: 350px;
  perspective: 1000px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

  // 나중에 지우기
  margin-top: 50px;

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
    }

    > .UserName {
        display: flex;
        justify-content : flex-end;
        color: var(--black-hunt);
        font-size: 15px;
        margin-left: auto;
    }

`;


//ImgContainer :  카드 안에 들어갈 이미지
const ImgContainer = styled.div`
    width: 100%;
    height: 38%;

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
      font-size: 17px;
    }
`;

//contentContainer :  카드 안에 들어갈 제목과 작성날짜
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;

    >.Title {
    padding: 10px 7px 7px 7px;
    color: var(--black-hunt);
    font-weight: 600;
    font-size: 20px;

    }

    >.ContentDate {
        display: flex;
        justify-content : flex-end;
        padding: 14px 7px 7px 7px;
        color: var(--black-hunt);
        font-weight: 200;
        font-size: 15px;
        margin-left: auto;
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