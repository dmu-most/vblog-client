import instance from '@api/axiosInstance';

import { RecentListItem, ReviewResponseType } from 'types/my-info';

// ============================ 최근목록 ============================
/** 2023/10/15 - 최근목록 Vlog GET 요청 - by sineTlsl */
export const getRecentVlog = async () => {
  const { data } = await instance.get<RecentListItem[]>('/myinfo/recently/vlog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/15 - 최근목록 Blog GET 요청 - by sineTlsl */
export const getRecentBlog = async () => {
  const { data } = await instance.get<RecentListItem[]>('/myinfo/recently/blog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

// ============================ 리뷰 ============================
/** 2023/10/15 - 리뷰 Vlog GET 요청 - by sineTlsl */
export const getMyReviewVlog = async () => {
  const { data } = await instance.get<ReviewResponseType>('/myinfo/reviews/vlog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};

/** 2023/10/15 - 리뷰 Blog GET 요청 - by sineTlsl */
export const getMyReviewBlog = async () => {
  const { data } = await instance.get<ReviewResponseType>('/myinfo/reviews/blog', {
    headers: {
      'Only-Authorization': true,
    },
  });

  return data;
};
