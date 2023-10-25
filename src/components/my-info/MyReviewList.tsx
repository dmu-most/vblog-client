import { useState, useEffect } from 'react';
import styled from 'styled-components';

// apis
import { getMyReviewVlog, getMyReviewBlog } from '@api/my-info';

// types
import { MyContentListProps, MyContentMode, ReviewContent, ReviewResponseType } from 'types/my-info';

// components
import MyReviewItem from '@components/my-info/MyReviewItem';
import ReviewPagination from '@components/my-info/ReviewPagination';
import UndefinedData from '@components/common/UndefinedData';

const ReviewApiMapping: Record<MyContentMode, (page: number) => Promise<ReviewResponseType>> = {
  브이로그: getMyReviewVlog,
  블로그: getMyReviewBlog,
};

/** 2023/10/21 - 리뷰 리스트 컴포넌트 - by sineTlsl */
const MyReviewList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  const [review, setReview] = useState<ReviewResponseType>();
  const [reviewsData, setReviewsData] = useState<ReviewContent[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteReviewId, setDeleteReviewId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const selectedApi = ReviewApiMapping[mode as MyContentMode];

      if (selectedApi) {
        try {
          const res = await selectedApi(currentPage);
          console.log(res);
          setReview(res);
          setReviewsData(res.content);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [mode, currentPage, deleteReviewId]);

  return (
    <ReviewListContainer>
      <ReviewListUl>
        {reviewsData.length > 0 ? (
          reviewsData.map(review => (
            <li key={review.reviewId}>
              <MyReviewItem review={review} setDeleteReviewId={setDeleteReviewId} />
            </li>
          ))
        ) : (
          <UndefinedData text={`리뷰가 없습니다. 작성해보러 갈까요? :)`} />
        )}
      </ReviewListUl>
      {review && <ReviewPagination data={review} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </ReviewListContainer>
  );
};

export default MyReviewList;

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ReviewListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  width: 100%;
  height: calc(100% - 30px);
  gap: 40px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding: 20px 0;
  }
`;
