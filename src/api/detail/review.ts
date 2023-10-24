import instance from '@api/axiosInstance';

// type
import { vblogReviewType, ReviewFormRequest } from 'types/detail/review';

// ============================ 리뷰조회 최신순 ===============================================
/** 2023/10/13 - review 최신순 조회 - by jh */
export const getReviewNewCheck = async (contentId: number) => {
  const { data } = await instance.get<vblogReviewType[]>(`/review/new/${contentId}`, {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ 리뷰조회 평점순 ===============================================
/** 2023/10/13 - review 평점순 조회 - by jh */
export const getReviewGradeCheck = async (contentId: number) => {
  const { data } = await instance.get<vblogReviewType[]>(`/review/grade/${contentId}`, {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};

// ============================ 리뷰작성 ===============================================
/** 2023/10/13 - review 작성 - by jh */
export const PostReview = async (contentId: number, body: ReviewFormRequest) => {
  return await instance.post(`/review/${contentId}`, body, {
    headers: {
      'Only-Authorization': true,
    },
  });
};