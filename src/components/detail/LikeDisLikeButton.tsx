import { styled } from "styled-components";
import React, { useState } from "react";

// icon
import { BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";

//api
import { PostLikeInfo } from "@api/detail";


//**2023/10/24 좋아요/싫어요 클릭 버튼 - by jh
const LikeDisLikeButton: React.FC = (): JSX.Element => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [refresh, setRefresh] = useState(false);

  //**2023/10/24 좋아요/싫어요 클릭 시 리렌더링 함수 - by jh
  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  //**2023/07/29 좋아요 클릭 시 이벤트 함수- by jh
  const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsLikeClicked(!isLikeClicked); 
    setIsDislikeClicked(false); // 좋아요 클릭 시 싫어요는 false상태로 돌아감
  };

  //**2023/07/29 싫어요 클릭 시 이벤트 함수- by jh
  const handleDislikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsDislikeClicked(!isDislikeClicked); 
    setIsLikeClicked(false); // 싫어요 클릭 시 좋아요는 false상태로 돌아감
  };

  return (
    <AllLikeContainer>
      <LikeContainer onClick={handleLikeClick}>
        {isLikeClicked ? <BsHandThumbsUpFill fontSize="medium" color="inherit" /> 
          : <BsHandThumbsUp fontSize="medium" color="inherit" />}
      </LikeContainer>
      <label> ㅣ </label>
      <DislikeContainer onClick={handleDislikeClick}>
        {isDislikeClicked ? <BsHandThumbsDownFill fontSize="medium" color="inherit" /> 
          : <BsHandThumbsDown fontSize="medium" color="inherit" />}
      </DislikeContainer>
    </AllLikeContainer>
  );
};

export default LikeDisLikeButton;


// ============================ 리뷰 좋아요 싫어요 ===============================================

const AllLikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: row;
  gap: 0.3rem;
  background-color: var(--gray-light);
  padding: 6px 12px;
  height: 30px;
  width: auto;
  border-radius: 2rem;

  &:hover {
    background-color: var(--gray-primary);
  }

  > label {
    color: var(--gray-dark);
    font-size: 15px;
    font-weight: 400;
    padding: 5px;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    height: 20px;
  }
`;

const LikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  cursor: pointer;
  color: var(--black-hunt);

  &:hover {
    transform: scale(1.2); /* 마우스 오버 시 10% 확대 */
  }
`;

const DislikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  cursor: pointer;
  color: var(--black-hunt);

  &:hover {
    transform: scale(1.2); /* 마우스 오버 시 10% 확대 */
  }
`;
