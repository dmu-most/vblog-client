import React, { useState } from "react";
import { styled } from "styled-components";
import { FaUserPen } from "react-icons/fa6";

//Component
import ReviewForm from "@components/common/ReviewForm";
import RatingModal from "./modal/RatingModal";

//**2023/07/29 ReviewComponent
const ReviewComponent: React.FC = () => {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const openRatingModal = () => {
    setIsRatingModalOpen(true);
  };

  const closeRatingModal = () => {
    setIsRatingModalOpen(false);
  };

  const handleWriteClick = () => {
    // 작성하기 버튼 클릭 시 alert 띄워 줌
    alert("작성이 완료되었습니다.");
  };


    return (
        <ReviewContainer>
          <WriteContainer>
            <FaUserPen size={30}/>
            <input className="Input" type="text" placeholder="브블리뷰를 작성해주세요." />
          </WriteContainer>
          <ButtonContainer>
            <div className="WriteButton" onClick={handleWriteClick} > 작성 </div>
            <div className="Score" onClick={openRatingModal}> 평점 </div>
          </ButtonContainer>
          <AllReviewContainer>
            <div className="Label"> 브블 리뷰 </div>
          </AllReviewContainer>
          <RatingContainer>
            <div className="RatingButton"> 최신순 </div>
            <div className="text"> ㅣ </div>
            <div className="RatingButton"> 평점순 </div>
          </RatingContainer>
          <ReviewFormContainer>
            <ReviewForm />
            <ReviewForm />
            <ReviewForm />
            <ReviewForm />
            <ReviewForm />
            <ReviewForm />
          </ReviewFormContainer>
          <RatingModal isOpen={isRatingModalOpen} closeModal={closeRatingModal} />
        </ReviewContainer>
    )
}

export default ReviewComponent;

const ReviewContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 50px 20px 20px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
      }
`;

// 리뷰 작성하는 컨테이너
const WriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 20px;
  gap: 20px;

  // For mobile screens
  @media ${props => props.theme.breakpoints.mobileSMax} {
    > svg {
      font-size: 20px; 
    }

    > input::placeholder {
      font-size: 12px;
    }
  }
  

  // 리뷰 작성 input
  > input {
    border: none;
    border-bottom: 1px solid var(--gray-dark);
    outline: none;
    padding: 5px;
    flex: 1;
  }
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: auto;
  gap: 20px;

  // 평점 나타내는 버튼
  > .Score {
  ${({ theme }) => theme.common.flexCenter};
  cursor: pointer;
  color: var(--black-light);
  font-size: 16px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
  font-size: 13px;
      }
  }

  // 작성 버튼
  > .WriteButton {
  ${({ theme }) => theme.common.flexCenter};
  background-color: var(--gray-primary);
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 40%;
  cursor: pointer;
  margin-right: 15px;
  color: var(--white-primary);
  font-size: 16px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 50px;
    height: 30px;
    font-size: 13px;
      }
  }
`;

const AllReviewContainer = styled.div`
  ${({ theme }) => theme.common.flexRow};

  > .Label {
    padding: 15px;
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 25px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 18px;
      }
    }
`;

const RatingContainer = styled.div`
  ${({ theme }) => theme.common.flexRow};
  padding: 15px;

  > .RatingButton {
    /* padding: 15px; */
    color: var(--gray-dark);
    font-size: 15px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 12px;
    }
    }
    > .text {
    color: var(--black-hunt);
    font-size: 15px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 13px;
      }
    }
`;

const ReviewFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    max-height: 200px;
    }
`;