import styled from 'styled-components';
import Rating from '@mui/material/Rating';

import { ReviewPutRequest } from 'types/my-info';

// api
import { putMyReview } from '@api/my-info';

// icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface EditReviewProps {
  id: number;
  date: string;
  rating: number;
  setRating: (rating: number) => void;
  content: string;
  setContent: (content: string) => void;
  setIsEditReview: (isEdit: boolean) => void;
}

/** 2023/10/25 - 리뷰 수정 컴포넌트 - by sineTlsl */
const EditReview: React.FC<EditReviewProps> = ({
  id,
  date,
  rating,
  setRating,
  content,
  setContent,
  setIsEditReview,
}): JSX.Element => {
  /** 2023/10/25 - 리뷰 수정 완료 이벤트 함수 - by sineTlsl */
  const handlerCheckBtn = async () => {
    const body: ReviewPutRequest = {
      reviewContent: content,
      grade: rating,
    };

    const res = await putMyReview(id, body);

    try {
      setIsEditReview(false);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <EditReviewContainer>
      <div className="title_space">
        <div className="review_rating_date">
          <p className="review_date">{date}</p>
          <Rating
            name="write_rating"
            defaultValue={rating}
            value={rating}
            precision={1}
            onChange={(e, newValue) => {
              if (newValue) {
                setRating(newValue);
              }
            }}
            icon={<AiFillStar style={{ color: '#699BF7' }} size={27} />}
            emptyIcon={<AiOutlineStar style={{ color: '#699BF7' }} size={27} />}
          />
        </div>
        <div className="check_btn_wrap">
          <button type="submit" onClick={handlerCheckBtn}>
            확인
          </button>
        </div>
      </div>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
    </EditReviewContainer>
  );
};

export default EditReview;

const EditReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCol};
  border: 2px solid #699bf7;
  border-radius: 7px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 0 7px 7px #efeeee;

  > .title_space {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
  }
  > .title_space > .review_rating_date {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  > .title_space > .check_btn_wrap {
    > button {
      background: #699bf7;
      height: 30px;
      width: 70px;
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      color: var(--white-primary);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      @media ${props => props.theme.breakpoints.mobileLMax} {
        font-size: 15px;
        width: 60px;
      }
    }
  }
  > .title_space > .review_rating_date > .review_date {
    ${({ theme }) => theme.common.flexCenterRow};
    font-size: 14px;
    color: var(--gray-dark);
  }

  > textarea {
    width: 100%;
    min-height: 100px;
    height: auto;
    border: 0;
    border-radius: 7px;
    background: var(--gray-light);
    padding: 5px;
    font-size: 15px;
    color: var(--black-hunt);

    :active {
      background: #4e82e2;
    }
  }
`;
