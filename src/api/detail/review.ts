import instance from '@api/axiosInstance';

// type
import { vblogReviewType } from 'types/detail/review';

// ============================ 리뷰조회 ============================
export const getReviewCheck = async (contentId: number) => {
  const { data } = await instance.get<vblogReviewType[]>(`/review/new/${contentId}`, {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};