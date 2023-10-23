import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";

// react icon
import { FaUserPen } from "react-icons/fa6";

// marerial UI
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';

//Component
import ReviewForm from "@components/common/ReviewForm";
import RatingModal from "./modal/RatingModal";

//api
import { getReviewNewCheck, getReviewGradeCheck } from "@api/detail/review";

//type
import {  vblogReviewType } from "types/detail/review";

//store
import { useMemberStore } from "@store/useMemberStore";

interface ReviewComponentProps {
  contentId: number;
}

//**2023/07/29 ReviewComponent- by jh
const ReviewComponent: React.FC<ReviewComponentProps> = ({ contentId }): JSX.Element => {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState<vblogReviewType[]>([]);
  const [sortBy, setSortBy] = useState<"new" | "grade">("new");
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [inputValue, setInputValue] = useState(""); // review의 들어오는 input 값 정의
  const navigate = useNavigate();

  /** 2023/08/09 - 모달 오픈 함수 - by jh */
  const openRatingModal = () => {
    setIsRatingModalOpen(true);
  };

  /** 2023/08/09 - 모달 종료 함수 - by jh */
  const closeRatingModal = () => {
    setIsRatingModalOpen(false);
  };

  // 좋아요 클릭 함수
  const handleLikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsLikeClicked(true);
  };
  // 싫어요 클릭 함수
  const handleDislikeClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsDislikeClicked(true);
  };

  const handleWriteClick = () => {
   if (!useMemberStore.getState().member) {
     alert("로그인을 진행해주세요");
     navigate('/login');
    } else {
     openRatingModal();
   }
  };

  /** 2023/08/09 - 안가순 / 평점순 api 받는 함수 - by jh */
  const fetchReviewData = async () => {
    try {
      if (sortBy === "new") {
        const res = await getReviewNewCheck(contentId);
        setReviewData(res);
      } else if (sortBy === "grade") {
        const res = await getReviewGradeCheck(contentId);
        setReviewData(res);
      }
    } catch (error) {
      console.error('Error fetching review data:', error);
    }
  };

  useEffect(() => {
    fetchReviewData();
  }, [useMemberStore.getState().member,contentId, sortBy]);

    return (
        <ReviewContainer>
          <WriteContainer>
            <FaUserPen size={30}/>
            <input 
              className="Input" 
              type="text" 
              value={inputValue}
              placeholder="브블리뷰를 작성해주세요." 
              onChange={(e) => setInputValue(e.target.value)}
            />
          </WriteContainer>
          <ButtonContainer>
            <div className="WriteButton" onClick={handleWriteClick} > 작성 </div>
        <LikeDislikeContainer>
            <LikeContainer onClick={handleLikeClick}>
                <SentimentSatisfiedAltIcon fontSize="medium" color="inherit" />
                <div className="Label"> Like </div>
            </LikeContainer>
            <DislikeContainer onClick={handleDislikeClick}>
                <SentimentVeryDissatisfiedOutlinedIcon fontSize="medium" color="inherit" />
                <div className="Label"> DisLike </div>
            </DislikeContainer>
        </LikeDislikeContainer>
          </ButtonContainer>
          <AllReviewContainer>
            <div className="Label"> 브블 리뷰 </div>
          </AllReviewContainer>
          <RatingContainer>
            <div className="RatingButton" onClick={() => setSortBy("new")}> 최신순 </div>
            <div className="text">ㅣ</div>
            <div className="RatingButton" onClick={() => setSortBy("grade")}> 평점순 </div>
          </RatingContainer>
          {reviewData.length > 0 ? (
            reviewData.map((item) => <ReviewForm key={item.reviewId} data={item} />)
          ) : (
            <p>no review</p>
          )}
          <ReviewFormContainer>
          </ReviewFormContainer>
          <RatingModal 
            isOpen={isRatingModalOpen}
            closeModal={closeRatingModal}
            inputValue={inputValue} />
        </ReviewContainer>
    )
}

export default ReviewComponent;

const ReviewContainer = styled.div`
  width: 70%;
  height: 1000px;
  overflow-y: auto;
  margin: 50px 2rem 2rem 2rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: var(--white-primary);
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
      font-size: 10px;
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
  font-size: 14px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
  font-size: 11px;
      }
  }

  // 작성 버튼
  > .WriteButton {
  ${({ theme }) => theme.common.flexCenter};
  background-color: var(--gray-primary);
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 40%;
  cursor: pointer;
  margin-right: 15px;
  color: var(--white-primary);
  font-size: 14px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    width: 45px;
    height: 25px;
    font-size: 11px;
      }
  }
`;

const AllReviewContainer = styled.div`
  ${({ theme }) => theme.common.flexRow};

  > .Label {
    padding: 15px;
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 22px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 15px;
      }
    }
`;

const RatingContainer = styled.div`
  ${({ theme }) => theme.common.flexRow};
  padding: 15px;

  > .RatingButton {
    /* padding: 15px; */
    color: var(--gray-dark);
    font-size: 12px;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      font-size: 10px;
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
  overflow-y: auto; /* Add overflow-y property for vertical scrolling */

  @media ${props => props.theme.breakpoints.mobileSMax} {
    max-height: 200px;
  }
`;

// ============================ 리뷰 좋아요 싫어요 ===============================================

const LikeDislikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: row;  
  gap: 1rem;
`;

const LikeContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;  
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