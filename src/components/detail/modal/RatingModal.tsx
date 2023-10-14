import React, { useState } from "react";
import { styled } from "styled-components";

// marerial UI
import Rating from '@mui/material/Rating';


interface RatingModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

//**2023/08/07 평점 클릭 시 평점과 좋아요/싫어요를 등록할 수 있는 모달 - by jh
const RatingModal: React.FC<RatingModalProps> = ({ isOpen, closeModal }) => {
  const [ratingValue, setRatingValue] = useState<number | null>(4.5);

  // 평점 값 함수
  const handleRatingChange = (event: any, value: number | null) => { 
    setRatingValue(value);
  };

  // 평점 , 좋아요/싫어요 등록 함수
  const handleRegisterClick = () => {
    // 등록하기 버튼 클릭 시 등록 완료 alert
    alert("등록이 완료되었습니다.");
    // alert 보여준 후 모달 종료
    closeModal();
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
