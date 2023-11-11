import { styled } from "styled-components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import AlertModal from '@components/common/AlertModal';

// icon
import { BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";

//api
import { PostLikeInfo } from "@api/detail";

//store
import { useMemberStore } from '@store/useMemberStore';
import { useLikeDislikeStore } from "@store/useLikeDislikeStore";

interface LikeDisLikeButtonProps {
  contentId: number;
}

//**2023/10/24 좋아요/싫어요 클릭 버튼 - by jh
const LikeDisLikeButton: React.FC<LikeDisLikeButtonProps> = ({ contentId }): JSX.Element => {
  // local storage 저장 부분은 상태관리로 바꿀 예정
  const storedLikedState = localStorage.getItem(`like_${contentId}`);
  const storedDislikedState = localStorage.getItem(`dislike_${contentId}`);

  const [isLiked, setIsLiked] = useState(storedLikedState === 'true');
  const [isDisliked, setisDisliked] = useState(storedDislikedState === 'true');
  const navigate = useNavigate();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalErrorText, setModalErrorText] = useState<string[]>([]);

  //**2023/07/29 모달 종료 후 로그인 화면으로 이동- by jh
  const handleToLogin = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  //**2023/07/29 좋아요 클릭 시 이벤트 함수- by jh
  const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = async () => {
    // 로그인이 돼야만 좋아요 클릭 가능
    if (!useMemberStore.getState().member) {
      setModalErrorText(['로그인을 진행해주세요.']);
      setIsModalOpen(true);
    } else {
      setIsLiked(true);
      localStorage.setItem(`like_${contentId}`, 'true');
      localStorage.removeItem(`dislike_${contentId}`); 
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
      setModalErrorText(['로그인을 진행해주세요.']);
      setIsModalOpen(true);
    } else {
      setisDisliked(true);
      // 싫어요 api 서버 연결
      localStorage.setItem(`dislike_${contentId}`, 'true');
      localStorage.removeItem(`like_${contentId}`);
      await PostLikeInfo(contentId, false);
      // 싫어요 클릭 시 리렌더링(불린값 때문에 트리거 함수 안먹어서 어쩔수 없이 reload)
      window.location.reload();
    }
  };

  return (
    <AllLikeContainer>
      <LikeContainer onClick={handleLikeClick}>
        {isLiked ? <BsHandThumbsUpFill fontSize="medium" color="inherit" /> 
          : <BsHandThumbsUp fontSize="medium" color="inherit" />}
      </LikeContainer>
      <label> ㅣ </label>
      <DislikeContainer onClick={handleDislikeClick}>
        {isDisliked ? <BsHandThumbsDownFill fontSize="medium" color="inherit" /> 
          : <BsHandThumbsDown fontSize="medium" color="inherit" />}
      </DislikeContainer>
      <div>
        <AlertModal isOpen={isModalOpen} onClose={handleToLogin}>
          {modalErrorText.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </AlertModal>
      </div>
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
