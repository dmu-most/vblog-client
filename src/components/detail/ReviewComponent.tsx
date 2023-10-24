import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";

// react icon
import { FaUserPen } from "react-icons/fa6";

// marerial UI
import Rating from '@mui/material/Rating';

//Component
import ReviewForm from "@components/common/ReviewForm";

//api
import { getReviewNewCheck, getReviewGradeCheck, PostReview } from "@api/detail/review";

//type
import {  vblogReviewType } from "types/detail/review";

//store
import { useMemberStore } from "@store/useMemberStore";

interface ReviewComponentProps {
  contentId: number;
}

//**2023/07/29 ReviewComponent- by jh
const ReviewComponent: React.FC<ReviewComponentProps> = ({ contentId }): JSX.Element => {
  const [reviewData, setReviewData] = useState<vblogReviewType[]>([]);
  const [sortBy, setSortBy] = useState<"new" | "grade">("new");
  const [ratingValue, setRatingValue] = useState<number | null>(4.5);
  const [inputValue, setInputValue] = useState(""); // review의 들어오는 input 값 정의
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();


  //**2023/10/24 리뷰 작성 시 리렌더링 함수 - by jh
  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  //**2023/07/29 평점 클릭 시 이벤트 함수- by jh
  const handleRatingChange = (event: any, value: number | null) => { 
    setRatingValue(value);
  };

  //**2023/10/24 리뷰 작성 클릭 시 이벤트 함수(alert은 modal로 바꿀 예정) - by jh
  const handleReviewWriteClick = async () => {
    if (!useMemberStore.getState().member) {
      alert("로그인을 진행해주세요");
      navigate('/login');
    } else if (inputValue.trim() === "") {
      alert("리뷰를 작성해주세요.");
    } else {
      if (ratingValue === null) {
        alert("평점을 선택해주세요.");
      } else {
        try {
          const reviewForm = {
            reviewContent: inputValue,
            grade: ratingValue
          };

          // api 연결
          const res = await PostReview(contentId, reviewForm); 
          // ========= 콘솔은 나중에 지움 ==================
          // console.log("Response:", res);
          if (res) {
          triggerRefresh();
          setInputValue("");
          setRatingValue(4.5);
            alert("작성이 완료되었습니다.");
          } else {
            alert("작성 중에 오류가 발생했습니다.");
          }
        } catch (error) {
          console.error('Error posting the review:', error);
          alert("오류나써.");
        }
      }
    }
  };

  /** 2023/08/09 - 인가순 / 평점순 api 받는 함수 - by jh */
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

  /** 2023/08/09 - 리뷰 작성 , 조회처리 - by jh */
  useEffect(() => {
    fetchReviewData();
  }, [useMemberStore.getState().member, contentId, sortBy, refresh]);

    return (
        <ReviewContainer>
          {/* 평점을 선택하는 컨테이너 */}
          <RatingContainer>
            <div className="Label"> 평점을 선택해주세요.</div>
            <Ratings>{ratingValue}</Ratings>
            <StarRatingContainer>
              <Rating name="half-rating" value={ratingValue} precision={0.5} onChange={handleRatingChange} size="medium"/>
            </StarRatingContainer>
          </RatingContainer>
          {/* 리뷰를 작성하는 컨테이너 */}
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
            <div className="WriteButton" onClick={handleReviewWriteClick} > 작성 </div>
          </ButtonContainer>
          {/* 리뷰 조회 컨테이너 */}
          <AllReviewContainer>
            <div className="Label"> 브블 리뷰 </div>
          </AllReviewContainer>
          <SortingContainer>
            <div className="RatingButton" onClick={() => setSortBy("new")}> 최신순 </div>
            <div className="text">ㅣ</div>
            <div className="RatingButton" onClick={() => setSortBy("grade")}> 평점순 </div>
          </SortingContainer>
          {reviewData.length > 0 ? (
            reviewData.map((item) => <ReviewForm key={item.reviewId} data={item} />)
          ) : (
            <p>no review</p>
          )}
          <ReviewFormContainer>
          </ReviewFormContainer>
        </ReviewContainer>
    )
}

export default ReviewComponent;

const ReviewContainer = styled.div`
  width: 70%;
  height: 700px;
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

// 평점을 선택하는 부분
const RatingContainer = styled.span`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column; 

  > .Label {
    padding: 1rem;
    color: var(--black-hunt);
    font-weight: 500;
    font-size: 15px;

    @media ${props => props.theme.breakpoints.mobileLMax} {
      font-size: 12px;
      }
    }
`;

const Ratings = styled.span`
  font-size: 50px;
  padding: 1rem;
  color: var(--black-hunt);

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 30px;
    }
`;

const StarRatingContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
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
      font-size: 15px; 
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

const SortingContainer = styled.div`
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