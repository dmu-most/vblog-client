import instance from '@api/axiosInstance';

// type
import { vblogReviewType } from 'types/detail/review';

// ============================ 리뷰조회 ============================
export const getReviewCheck = async () => {
  const { data } = await instance.get<vblogReviewType[]>('/review/new/1', {
    headers: {
      'No-Auth': true,
    },
  });

  return data;
};