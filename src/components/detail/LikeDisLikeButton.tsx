import { styled } from "styled-components";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



// icon
import { BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";

//api
import { PostLikeInfo } from "@api/detail";

//store
import { useMemberStore } from '@store/useMemberStore';

interface LikeDisLikeButtonProps {
  contentId: number;
}

//**2023/10/24 좋아요/싫어요 클릭 버튼 - by jh
const LikeDisLikeButton: React.FC<LikeDisLikeButtonProps> = ({ contentId }): JSX.Element => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const navigate = useNavigate();

  //**2023/07/29 좋아요 클릭 시 이벤트 함수- by jh
const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = async () => {
  // 로그인이 돼야만 좋아요 클릭 가능
  if (!useMemberStore.getState().member) {
    alert('로그인을 진행해주세요');
    navigate('/login');
  } else {
    // 좋아요 -> 좋아요 클릭 상태로 변경
    setIsLikeClicked(!isLikeClicked);
    // 싫아요를 클릭하고 좋아요를 클릭하면 싫어요는 false
    setIsDislikeClicked(false);
    // 좋아요 api 서버 연결
    await PostLikeInfo(contentId, true);
    // 좋아요 클릭 시 리렌더링(불린값 때문에 트리거 함수 안먹어서 어쩔수 없이 reload)
    window.location.reload();
  }
};


  //**2023/07/29 싫어요 클릭 시 이벤트 함수- by jh
  const handleDislikeClick: React.MouseEventHandler<HTMLDivElement> = async () => {
  // 로그인이 돼야만 싫어요 클릭 가능
  if (!useMemberStore.getState().member) {
    alert('로그인을 진행해주세요');
    navigate('/login');
  } else {
    // 싫어요 -> 싫어요 클릭 상태로 변경
    setIsDislikeClicked(!isDislikeClicked); 
    // 좋아요 클릭하고 싫어요를 클릭하면 좋아요는 false
    setIsLikeClicked(false);
    // 싫어요 api 서버 연결
    await PostLikeInfo(contentId, false);
    // 싫어요 클릭 시 리렌더링(불린값 때문에 트리거 함수 안먹어서 어쩔수 없이 reload)
    window.location.reload();
    }
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
