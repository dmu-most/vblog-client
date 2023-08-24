import React, { useState } from "react";
import { styled } from "styled-components";

// marerial UI
import Rating from '@mui/material/Rating';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';


interface RatingModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

//**2023/08/07 평점 클릭 시 평점과 좋아요/싫어요를 등록할 수 있는 모달 - by jh
const RatingModal: React.FC<RatingModalProps> = ({ isOpen, closeModal }) => {
  const [ratingValue, setRatingValue] = useState<number | null>(4.5);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);

  // 평점 값 함수
  const handleRatingChange = (event: any, value: number | null) => { 
    setRatingValue(value);
  };

  
  // 좋아요 클릭 함수
const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
  setIsLikeClicked(true);
};

  // 싫어요 클릭 함수
const handleDislikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
  setIsDislikeClicked(true);
};

  // 평점 , 좋아요/싫어요 등록 함수
  const handleRegisterClick = () => {
    // 등록하기 버튼 클릭 시 등록 완료 alert
    alert("등록이 완료되었습니다.");
    // alert 보여준 후 모달 종료
    closeModal();
    // 좋아요 클릭 상태를 true로 설정
    setIsLikeClicked(true);
  };


  return (
    <RatingModalOverlay isOpen={isOpen}>
      <RatingModalContent isOpen={isOpen}>
        <CloseContainer>
          <div className="Label" onClick={closeModal}> x </div>
        </CloseContainer>
        <RatingContainer>
        <Ratings>{ratingValue}</Ratings>
        <StarRatingContainer>
          <Rating name="half-rating" value={ratingValue} precision={0.5} onChange={handleRatingChange} size="large"/>
        </StarRatingContainer>
        </RatingContainer>
        <LikeDislikeContainer>
            <LikeContainer onClick={handleLikeClick}>
                <SentimentSatisfiedAltIcon fontSize="large" color="inherit" />
                <div className="Label"> 좋아요 </div>
            </LikeContainer>
            <div className="Label"> / </div>
            <DislikeContainer onClick={handleDislikeClick}>
                <SentimentVeryDissatisfiedOutlinedIcon fontSize="large" color="inherit" />
                <div className="Label"> 싫어요 </div>
            </DislikeContainer>
        </LikeDislikeContainer>
        <SubmitButton onClick={handleRegisterClick}> 등록하기 </SubmitButton>
      </RatingModalContent>
    </RatingModalOverlay>
  );
};

export default RatingModal;

// Rest of the code...



const RatingModalOverlay = styled.div<{ isOpen: boolean }>`
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // 알라딘 효과
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
`;


const RatingModalContent = styled.div<{ isOpen: boolean }>`
  width: 350px;
  height: auto;
  background-color: var(--bg-white);
  padding: 20px;
  min-width: 0;
  word-wrap: break-word;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  // 알라딘 효과
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0.7)")};
  transition: transform 0.3s;
`;

const CloseContainer = styled.span`
  display: flex;
  flex-direction: row-reverse; 

    > .Label {
    color: var(--gray-dark);
    font-size: 25px;
    cursor: pointer;
  }
`;

const RatingContainer = styled.span`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column; 
`;

const Ratings = styled.span`
  font-size: 85px;
  padding: 20px;
  color: var(--black-hunt);
`;

const StarRatingContainer = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const LikeDislikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: row;  
  padding: 20px;

  > .Label {
    color: var(--black-hunt);
    font-size: 30px;
    font-weight: 600;
    padding: 10px;
  }
`;

const LikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;  
  padding: 10px;
  cursor: pointer;
  color: var(--icon-red);

    > .Label {
    color: var(--black-hunt);
    font-size: 10px;
    font-weight: 400;
    padding: 5px;
  }

    &:hover {
    transform: scale(1.2); /* 마우스 오버 시 10% 확대 */
  }
`;

const DislikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;  
  padding: 10px;
  cursor: pointer;
  color: var(--icon-blue);

    > .Label {
    color: var(--black-hunt);
    font-size: 10px;
    font-weight: 400;
    padding: 5px;
  }

    &:hover {
    transform: scale(1.2); /* 마우스 오버 시 10% 확대 */
  }
`;

const SubmitButton = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: 18px;
  padding: 20px;
  font-weight: 500;
  cursor: pointer;

    &:hover {
    transform: scale(1.1); /* 마우스 오버 시 10% 확대 */
  }
`;
