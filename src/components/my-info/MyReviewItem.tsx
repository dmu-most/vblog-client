import styled from 'styled-components';
import { useState } from 'react';
import { ReviewContent, ReviewPutRequest } from 'types/my-info';

// api
import { deleteMyReview, putMyReview } from '@api/my-info';

// component
import AlertModal from '@components/common/AlertModal';
import EditReview from '@components/my-info/EditReview';

// icons
import { AiFillStar, AiOutlineStar, AiFillEdit } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';

interface MyReviewItemProps {
  review: ReviewContent;
  setDeleteReviewId: (reviewId: number) => void;
}

/** 2023/10/21 - 리뷰 아이템 컴포넌트 - by sineTlsl */
const MyReviewItem: React.FC<MyReviewItemProps> = ({ review, setDeleteReviewId }): JSX.Element => {
  const [rating, setRating] = useState<number>(review.grade);
  const [content, setContent] = useState<string>(review.content);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditReview, setIsEditReview] = useState<boolean>(false);

  /** 2023/10/23 - 리뷰 삭제 이벤트 함수 - by sineTlsl */
  const handlerDeleteReview = async () => {
    await deleteMyReview(review.reviewId);

    try {
      setIsModalOpen(true);
      setTimeout(() => {
        setDeleteReviewId(review.reviewId);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ReviewContainer>
      {!isEditReview ? (
        <>
          <div className="review_board">
            <h2>{review.title}</h2>
          </div>
          <div className="title_space">
            <div className="review_rating_date">
              <p className="review_date">{review.createdDate}</p>
              <span className="gap">|</span>
              <div>
                {[...Array(5)].map((_, idx) =>
                  Math.floor(rating) > idx ? (
                    <AiFillStar key={idx} size={18} color={idx < rating ? '#699BF7' : '#e4e5e9'} />
                  ) : (
                    <AiOutlineStar key={idx} size={18} color={idx < rating ? '#699BF7' : '#e4e5e9'} />
                  ),
                )}
              </div>
            </div>
            <div className="icon_wrap">
              <button onClick={() => setIsEditReview(!isEditReview)}>
                <AiFillEdit size={18} color="#699BF7" />
              </button>
              <button onClick={handlerDeleteReview}>
                <BsFillTrash3Fill size={18} color="#699BF7" />
              </button>
            </div>
          </div>
          <div>
            <AlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <p>삭제되었습니다.</p>
            </AlertModal>
          </div>
          <p className="review_content">{content}</p>
        </>
      ) : (
        <>
          <div className="review_board">
            <h2 className="">{review.title}</h2>
          </div>
          <EditReview
            id={review.reviewId}
            date={review.createdDate}
            rating={rating}
            setRating={setRating}
            content={content}
            setContent={setContent}
            setIsEditReview={setIsEditReview}
          />
        </>
      )}
    </ReviewContainer>
  );
};

export default MyReviewItem;

const ReviewContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCol};
  color: var(--black-hunt);
  background: var(--white-primary);
  padding: 16px 16px 30px 16px;
  border-radius: 5px;

  .review_board {
    height: 100%;
    width: 100%;
    border-bottom: 1.5px solid var(--gray-primary);
    padding-bottom: 10px;
  }

  > .review_board > h2 {
    font-size: 15px;
    color: var(--black-hunt);
    font-weight: 600;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > .title_space {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  > .title_space > .review_rating_date {
    width: 100%;
    display: flex;
    padding: 5px 0 8px 0;
    gap: 10px;
  }
  > .title_space > .review_rating_date > .review_date {
    ${({ theme }) => theme.common.flexCenterRow};
    font-size: 14px;
    color: var(--gray-dark);
    padding-bottom: 1.5px;
  }
  > .title_space > .icon_wrap {
    ${({ theme }) => theme.common.flexCenterRow};
    gap: 8px;

    > button {
      padding: 0;
      margin: 0;
      background: 0;
      border: none;
      cursor: pointer;
    }
  }
  .gap {
    display: inline-block;
    font-size: 0;
    width: 1px;
    height: 10px;
    background: #d5d5d5;
    margin: 5px 3px 0 3px;
    vertical-align: top;
    box-sizing: border-box;
  }

  > .review_content {
    width: 100%;
    font-size: 15px;
    letter-spacing: 0.3px;
    line-height: 22px;
  }
`;
