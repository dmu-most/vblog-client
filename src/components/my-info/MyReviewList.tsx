import { useState, useEffect } from 'react';
import styled from 'styled-components';

// apis
import { getMyReviewVlog, getMyReviewBlog } from '@api/my-info';

// types
import { MyContentListProps, MyContentMode, ReviewContent, ReviewResponseType } from 'types/my-info';

// components
import MyReviewItem from '@components/my-info/MyReviewItem';
import ReviewPagination from '@components/my-info/ReviewPagination';

const ReviewApiMapping: Record<MyContentMode, () => Promise<ReviewResponseType>> = {
  브이로그: getMyReviewVlog,
  블로그: getMyReviewBlog,
};

/** 2023/10/21 - 리뷰 리스트 컴포넌트 - by sineTlsl */
const MyReviewList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  const [review, setReview] = useState<ReviewResponseType>();
  const [reviewsData, setReviewsData] = useState<ReviewContent[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const selectedApi = ReviewApiMapping[mode as MyContentMode];

      if (selectedApi) {
        try {
          const res = await selectedApi();
          console.log(res);
          setReview(res);
          setReviewsData(res.content);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [mode]);

  return (
    <ReviewListContainer>
      {reviewsData &&
        reviewsData.map(review => (
          <li key={review.reviewId}>
            <MyReviewItem review={review} />
          </li>
        ))}
      {review && <ReviewPagination data={review} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </ReviewListContainer>
  );
};

export default MyReviewList;

const ReviewListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  padding: 50px 0 20px 0;
  overflow-y: scroll;
  flex-grow: 1;
  justify-content: space-between;
`;
