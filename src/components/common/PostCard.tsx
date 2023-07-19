import styled from "styled-components";
import Hashtag from "./Hashtag";
import { AiFillHeart } from "react-icons/ai";

//**2023/07/19 PostCard
const PostCard = () => {
    return (
        <CardContainer>
          <IconContainer>
              <AiFillHeart width="10px" height= "10px" color="var(--icon-red)"/>
              <div className="Label"> 55 </div>
          </IconContainer>
          <ImgContainer>
          </ImgContainer>
          <ContentContainer>
          </ContentContainer>
          <TagContainer>
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
    width: 100%;
    height: 7%;

    > .Label {
      margin-left: 3px;
      font-size: 14px;
    }

`;


//ImgContainer :  카드 안에 들어갈 이미지
const ImgContainer = styled.div`
    background-color: green;
    width: 100%;
    height: 38%;
`;

//contentContainer :  카드 안에 들어갈 본문 내용
const ContentContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 40%;
`;

//TagContainer :  카드 안에 들어갈 태그들
const TagContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 20%;
`;